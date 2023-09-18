import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import UserModel from './models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();
const salt = bcrypt.genSaltSync(10);
const secret = 'dfhoaokhawfujdjdjqwhdoiie';
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with the correct origin
    credentials: true, // Allow cookies to be sent with the request
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Exit the process if MongoDB connection fails
});

// Registration Endpoint
app.post('/register', async (req, res) => {
  const { name, password } = req.body;
  try {
    const userDoc = await UserModel.create({
      name,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (err) {
    console.error('Registration error:', err);
    res.status(400).send('Registration failed');
  }
});

// Login Endpoint
app.post('/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    // Find the user by  name
    const userDoc = await UserModel.findOne({ name });

    if (!userDoc) {
      // User not found
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, userDoc.password);

    if (!passwordMatch) {
      // Incorrect password
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Password is correct; generate a token for authentication
    const token = jwt.sign({ name, id: userDoc._id }, secret, {});
    res.cookie('token', token).json('ok');
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Profile Endpoint
app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (!token) {
      // Token not provided, handle accordingly (e.g., send a 401 Unauthorized response).
      res.status(401).json({ message: 'Unauthorized' });
    } else {
      jwt.verify(token, secret, {}, (err, info) => {
        if (err) {
          // Token verification failed, handle accordingly.
          res.status(401).json({ message: 'Unauthorized' });
        } else {
          // Token is valid, you can use the 'info' object.
          res.json(info);
        }
      });
    }
  });
  

// Logout Endpoint
// app.post('/logout', (req, res) => {
//   res.clearCookie('token').json('ok');
// });

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
