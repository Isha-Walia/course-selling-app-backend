const Course= require("../models/Course")

//create a new course(Only instructors)

exports.createCourse= async(req,res)=>{
    try{
        if(req.user.role !=="instructor"){
            return res.status(403).json({message:"only instructors can create courses"})
        }

    const {title, description, price, category, videos}= req.body

    const course= new Course({
        title, description,price, category, instructor:req.user.id, videos
    })

    await course.save()
    res.status(201).json(course)

    }catch(error){
res.status(500).json({message: "server error"})
    }
}

// get all courses 
exports.getCourses= async(req,res) =>{
    try{
const courses = await Course.find().populate
    }catch(error){

    }
}