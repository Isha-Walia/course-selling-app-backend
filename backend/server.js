require("dotenv").config()
const express= require("express")
const mongoose= require("mongoose")
const cors= require("cors")
const { courseRoutes } = require("./routes/courseRoutes")
const authRoutes = require("./routes/authRoutes");



const app= express()

//middleware
app.use(express.json())
app.use(cors())
app.get("/", (req,res)=>{
    res.send("API is running")
})

app.use("/api/auth", authRoutes)
app.use("/api/course",courseRoutes  )

//connect to mongodb
mongoose
.connect(process.env.MONGO_URI)
.then(()=>{console.log("mongodb connected")})
.catch(err=>{console.log("mongodb error"), err})


const PORT= process.env.PORT || 5000
app.listen(PORT, ()=>{console.log("server running on port"), PORT})