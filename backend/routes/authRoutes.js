const express= require("express")
const {register, login}= require("../controllers/authController")
//const {check, validationResult}= require("express-validator")


const router= express.Router()

router.post("/register",register)
router.post("/login", login)

module.exports= router