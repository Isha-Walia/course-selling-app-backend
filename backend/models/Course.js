const mongoose= require("mongoose")

const courseSchema= new mongoose.Schema({
    title: {
        type: String, 
        required: true,

    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
         required:true,

    },
    category:{
        type: String,
        required: true,
    
    },
    instructor:{
        type: mongoose.Schema.Types.ObjectId, ref:"User", required: true
    },
    videos:[{
        type: String,
    }],
    createdAt:{
        type: Date,
        default: Date.now
    }


})

module.exports= mongoose.model("Course", courseSchema)