const jwt = require('jsonwebtoken')
const studentModel = require('../model/student')

const student_auth = async(req,res,next)=>{
    try{
        // console.log("hello bhai")
        const {token} = req.cookies
        if(!token){
            req.flash('error','Unauthorized user','please login')
            res.redirect('/studentlogin')
        }else{
            const verify_token = jwt.verify(token,'shashankshivhare')
            const data = await studentModel.findOne({_id: verify_token.dataid})
            req.data = data
            next()
            
        }
    }catch(error){
        console.log(error)
    }
}

module.exports = student_auth