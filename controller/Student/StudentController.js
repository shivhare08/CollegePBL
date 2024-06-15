const studentModel = require('../../model/student')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class StudentController{
    static StudentDashboard = async(req,res)=>{
        try{
            const {name,email,gender} = req.body
            const data = await studentModel.find()
            res.render('studentDashboard/StudentDashboard.ejs',{data:data })
        }catch(err){
            console.log(err)
        }
    }

    

    static StudentRegister  = async(req,res)=>{
        try{
            const {name,email,phone,course,category,address,gender,password,state,pincode,city,studentconfpassword} = req.body
            if(name && email && phone && category && address && gender && password && state && pincode && city && studentconfpassword){
                const emaildata = await studentModel.findOne({email:email})
                    if(emaildata){
                        req.flash('errorregister','email already exist')
                        res.redirect('/studentregister')
                    }else{
                        if(password.length >= 8){
                            if(password == studentconfpassword ){
                                const hashpassword = await bcrypt.hash(password , 10)
                                const studentdata = await studentModel({
                                    name:name,
                                    email:email,
                                    phone:phone,
                                    course:course,
                                    gender:gender,
                                    category:category,
                                    state:state,
                                    city:city,
                                    address:address,
                                    pincode:pincode,
                                    password:hashpassword,                
                                    
                                })
                                await studentdata.save()
                                req.flash('successregister','Registeration successful now Login')
                                res.redirect('/studentlogin')
                            }else{
                                req.flash('errorregister','Password and confirm password are not match')
                                res.redirect('/studentregister')
                            }
                        }else{
                            req.flash('errorregister','password must have at least 8 character')
                            res.redirect('/studentregister')
                        }
                    }
            }else{
                req.flash('errorregister','All feilds are required')
                res.redirect('/studentregister')
            }
        }catch(error){
            console.log(error);
        }
    }

    static StudentLogin = async(req,res)=>{
        try{
            const {email , password} = req.body
            if(email && password){
                const data = await studentModel.findOne({email:email})
                if(data != null){
                    const match = await bcrypt.compare(password , data.password)
                    if((data.email == email) && match){
                        const token = jwt.sign({ dataid : data._id },'shashankshivhare')
                        res.cookie('token',token)
                        res.redirect('/studentdashboard')
                    }else{
                        req.flash('studenterror','invalid admin')
                        res.redirect('/studentlogin')
                    }
                }else{
                    req.flash("studenterror","you are not exist")
                    res.redirect('/studentlogin')
                }
            }else{
                req.flash("studenterror","All feilds are required")
                res.redirect('/studentlogin')
            }
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = StudentController



