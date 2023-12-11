const express = require('express')
const FrontController = require('../controller/Front/FrontController')
const ContactController = require('../controller/Contact/ContactController')
const router = express.Router()


//=======================FRONT CONTROLLER=============================//
router.get('/',FrontController.Home)
router.get('/about',FrontController.About)
router.get('/department',FrontController.Department)
router.get('/contact',FrontController.Contact)
router.get('/smartollege',FrontController.SmartCollege)
router.get('/studentlogin',FrontController.StudentLogin)
router.get('/instructorlogin',FrontController.InstructorLogin)
router.get('/adminlogin',FrontController.AdminLogin)
router.get('/studentregister',FrontController.StudentLogin)
router.get('/instructorregister',FrontController.InstructorRegister)
router.get('/adminregister',FrontController.AdminRegister)


//contactdynamic
router.post('/contactfill',ContactController.Contactitem)



module.exports = router