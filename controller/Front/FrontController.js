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
            res.render('frontend/smartcollege.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static LoginAll = async(req,res)=>{
        try{
            res.render('frontend/loginallpage.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static StudentLogin = async(req,res)=>{
        try{
            res.render('frontend/studentlogin.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static InstructorLogin = async(req,res)=>{
        try{
            res.render('frontend/home.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static AdminLogin = async(req,res)=>{
        try{
            res.render('frontend/home.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static Register = async(req,res)=>{
        try{
            res.render('frontend/home.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static AdminRegister = async(req,res)=>{
        try{
            res.render('frontend/home.ejs')
        }catch(error){
            console.log(error);
        }
    }

    static InstructorRegister = async(req,res)=>{
        try{
            res.render('frontend/home.ejs')
        }catch(error){
            console.log(error);
        }
    }
}


module.exports = FrontController