const studentModel = require('../../model/student')
const instructorModel = require('../../model/instructor')

class FrontController{
    static Home = async(req,res)=>{
        try{
            res.render('frontend/home.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static About = async(req,res)=>{
        try{
            res.render('frontend/about.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static Contact = async(req,res)=>{
        try{
            res.render('frontend/contact.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static Department = async(req,res)=>{
        try{
            res.render('frontend/department.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static  MoreDepartment = async(req,res)=>{
        try{
            res.render('extrafeilds/moredepartment.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static SmartCollege = async(req,res)=>{
        try{
            // console.log(data)
            res.render('frontend/smartcollege.ejs')
        }catch(error){
            console.log(error);
        }
    }


    static StudentLogin = async(req,res)=>{
        try{
            res.render('frontend/studentlogin.ejs',{message : req.flash('studenterror') , successlogin : req.flash('success')})
        }catch(error){
            console.log(error);
        }
    }

    static InstructorLogin = async(req,res)=>{
        try{
            res.render('frontend/instructorlogin.ejs',{instructorsuccessmsg : req.flash('successregister')})
        }catch(error){
            console.log(error);
        }
    }

    static AdminLogin = async(req,res)=>{
        try{
            res.render('frontend/adminlogin.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static  StudentRegister = async(req,res)=>{
        try{
            res.render('frontend/studentregister.ejs',{error : req.flash('errorregister')} )
        }catch(error){
            console.log(error);
        }
    }

    static AdminRegister = async(req,res)=>{
        try{
            res.render('frontend/adminregister.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static InstructorRegister = async(req,res)=>{
        try{
            res.render('frontend/instructorregister.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static InstructorDashboard = async(req,res)=>{
        try{
            const data = await instructorModel.find()
            const studentdata = await studentModel.find().sort({_id:-1})
            res.render('frontend/instructorDashboard.ejs',{studentdata : studentdata})
        }catch(error){
            console.log(error);
        }
    }
}


module.exports = FrontController