const express = require('express')
const FrontController = require('../controller/Front/FrontController')
const ContactController = require('../controller/Contact/ContactController')
const DepartmentController = require('../controller/Department/DepartmentController.js')
const AdminController = require('../controller/Admin/AdminController')
const StudentController = require('../controller/Student/StudentController')
const InstructorController = require('../controller/Instructor/InstructorController')
const auth = require('../middleware/auth')
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
router.get('/studentregister',FrontController.StudentRegister)
router.get('/instructorregister',FrontController.InstructorRegister)
router.get('/instructorDashboard',FrontController.InstructorDashboard)
router.get('/adminregister',FrontController.AdminRegister)

//=======================EXTRAFEILDS================\\
router.get('/MoreDepartment',FrontController.MoreDepartment)

//=======================DEPARTMENTS====================//
router.get('/biochemistry',DepartmentController.Biochemistry)
router.get('/botany',DepartmentController.Botany)
router.get('/chemicalSales',DepartmentController.ChemicalSales)
router.get('/chemistry',DepartmentController.Chemistry)
router.get('/commerce',DepartmentController.Commerce)
router.get('/csa',DepartmentController.Csa)
router.get('/distanceEducation',DepartmentController.DistanceEducation)
router.get('/earthScience',DepartmentController.EarthScience)
router.get('/economics',DepartmentController.Economics)
router.get('/engineeringandTechnology',DepartmentController.EngineeringandTechnology)
router.get('/environmentalChemistry',DepartmentController.EnvironmentalChemistry)
router.get('/indiraGandhiAcademy',DepartmentController.IndiraGandhiAcademy)
router.get('/USIC',DepartmentController.USIC)
router.get('/neuroscience',DepartmentController.Neuroscience)
router.get('/psychology',DepartmentController.Psychology)
router.get('/socialWorkandExtensionEducation',DepartmentController.SocialWorkandExtensionEducation)
router.get('/travelManagement',DepartmentController.TravelManagement)
router.get('/zoology',DepartmentController.Zoology)


//studentdashboard
router.get('/studentdashboard',StudentController.StudentDashboard)

//contactdynamic
router.post('/contactfill',ContactController.Contactitem)

//studentregisterdynamic
router.post('/studentregister',StudentController.StudentRegister)
router.post('/studentlogin',StudentController.StudentLogin)

//instructorregisterdynamic
router.post('/instructorregister',InstructorController.InstructorRegister)
router.post('/instructorlogin',InstructorController.InstructoreLogin)





module.exports = router