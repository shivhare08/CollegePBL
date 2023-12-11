const contactmodel = require('../../model/contact')

class ContactController{
    static Contactitem = async(req,res)=>{
        try{
            const {name,message,email,reason} = req.body
            const data = await contactmodel({
                name:name,
                email:email,
                message:message,
                reason:reason
            })
            await data.save()
            res.redirect('/contact')
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = ContactController