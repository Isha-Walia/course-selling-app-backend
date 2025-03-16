const express= require("express")
const { authenticate, authorizeRoles } = require("../middleware/authMiddleware")
const { createCourse } = require("../controllers/courseController")
const courseRoutes= express.Router()
 courseRoutes.get("/create", authenticate, authorizeRoles["instructor"], createCourse)

module.exports= {courseRoutes}