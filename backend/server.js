require("dotenv").config()
const express= require("express")
const mongoose= require("mongoose")
const cors= require("cors")

const authRoutes= require("./routes/authRoutes")


const app= express()

//middleware
app.use(express.json())
app.use(cors())

app.use("/api/auth", authRoutes)

//connect to mongodb
mongoose
.connect(process.env.MONGO_URI)
.then(()=>{console.log("mongodb connected")})
.catch(err=>{console.log("mongodb error"), err})

//default route
app.get("/", (req,res)=>{
    res.send("API is running")
})

const PORT= process.env.PORT || 5000
app.listen(PORT, ()=>{console.log("server running on port"), PORT})