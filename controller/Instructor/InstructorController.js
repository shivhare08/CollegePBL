const instructorModel = require('../../model/instructor')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



class InstructorController{
    static InstructoreLogin = async(req,res)=>{
        try{
            // console.log(req.body)
            const {email ,password} = req.body
            if(email && password){
                const data = await instructorModel.findOne({email:email})
                if(data != null){
                    const match = await bcrypt.compare(password , data.password)
                    if((data.email == email) && match){
                        const token = jwt.sign({instructorID : data._id},'shashankshivhare10') 
                        // console.log(token)
                        res.cookie('token',token)
                        res.redirect('/instructorDashboard')
                    }else{
                        req.flash('errorrlogin','invalid admin')
                        res.redirect('/instructorlogin')
                    }
                }else{
                    req.flash("errorrlogin","you are not exist")
                    res.redirect('/instructorlogin') 
                }
            }else{
                req.flash('errorrlogin','All feilds are required')
                res.redirect('/instructorlogin')
            }
        }catch(error){
            console.log(error);
        }
    }

    static InstructorRegister = async(req,res)=>{
        try{
            // console.log(req.body.name)
            const {name,email,phone,address,gender,password,state,pincode,city,instructorconfpassword} = req.body
            if(name && email && phone && address && gender && password && state && pincode && city && instructorconfpassword){
                const matchemail = await instructorModel.findOne({email:email})
                if(matchemail){
                    req.flash('errorregister','email already exist')
                    res.redirect('/instructorregister')
                }else{
                    if(password.length >= 8){
                        if(password == instructorconfpassword){
                            const hashpassword = await bcrypt.hash(password,10)
                            // console.log(hashpassword)
                            const Instructordata = await instructorModel({
                                name:name,
                                email:email,
                                phone:phone,               
                                gender:gender,             
                                state:state,
                                city:city,
                                address:address,
                                pincode:pincode,
                                password:hashpassword,                
                                
                            })
                            await Instructordata.save()
                            req.flash('successregister','Registeration successfully now Login')
                            res.redirect('/instructorlogin')
                        }else{
                            req.flash('errorregister','Password and confirm password are not same')
                            res.redirect('/instructorregister')
                        }
                    }else{
                        req.flash('errorregister','Password length should be 8 or above')
                        res.redirect('/instructorregister')
                    }
                }
            }else{
                req.flash('errorregister','All feilds are required')
                res.redirect('/instructorregister')
            }
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = InstructorController