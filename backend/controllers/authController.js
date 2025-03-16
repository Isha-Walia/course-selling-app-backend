const User= require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt= require("bcryptjs")

const generateToken = (user) =>{
    return jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET, {expiresIn: "7d"})
}

//register user 
exports.register= async(req, res)=>{
    const{name, email, password, role}= req.body
    try{
let user= await User.findOne({email})
if(user) return res.status(400).json({message: "user already exists"})

user= await User.create({name, email, password, role})
res.status(201).json({messgae: "user registered successfully"})
 }catch(error){
console.log("error", error)
res.status(500).json({message: "server error"})

    }
}

//login user
exports.login= async(req,res)=>{
    const {email,password}= req.body 
    try{
        const user = await User.findOne({email})
        if(!user) return res.status(400).json({messsage:"invalid credentials"})
        
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({message:"invalid credentials"})
        
        //res.cookie("token", generateToken(user), {httpOnly: true})
        res.status(200).json({message:"login successful", token:generateToken(user)})


    }catch(error){
    console.log("error", error)
   res.status(500).json({message: "server error"})
    }

}