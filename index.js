import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfully")
    } catch(error) {
        console.error("error in db.js",error)
    }
}

app.get("/",(req,res)=>{
    res.status.send("hello there")
})

