import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios

const Header = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // Send a GET request to the /profile endpoint with the token
    axios.get('http://localhost:4001/profile', {
      withCredentials: true, // Include cookies
    })
      .then((response) => {
        setUsername(response.data.name);
      })
      .catch((error) => {
        // Handle errors, e.g., unauthorized (401)
        console.error('Profile request error:', error);
      });
  }, []);

  const logOut = () => {
    // Send a POST request to the /logout endpoint
    axios.post('http://localhost:4001/logout', {}, {
      withCredentials: true, // Include cookies
    })
      .then((response) => {
        // Handle successful logout, e.g., redirect the user
      })
      .catch((error) => {
        // Handle errors
        console.error('Logout request error:', error);
      });
  };

  return (
    <div>
      <header className='flex justify-between'>
        <h1 className='text-4xl font-mono uppercase'><Link to="/">WIZBLOG</Link></h1>
        <nav className='flex gap-5'>
          {username ? (
            <>
              <Link to="/create">Create new post</Link>
              <a onClick={logOut}>Logout</a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
