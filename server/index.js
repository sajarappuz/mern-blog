import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

const app = express()


app.use(cors())
app.use(express.json())
dotenv.config()

mongoose.connect(process.env.MONGO)

app.listen(4001, ()=>{
    console.log("server is rumming")
})