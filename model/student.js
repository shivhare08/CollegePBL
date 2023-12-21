const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
    },
    phone : {
        type:Number,
        required:true
    },
    gender :{
        type:String,
        required:true,
    },
    category :{
        type:String,
        required:true,
    },
    state : {
        type:String,
        required:true
    },
    city :{
        type:String,
        required:true,
    },
    address : {
        type:String,
        required:true
    },
    pincode :{
        type:Number,
        required:true
    },
    password :{
        type:String,
        required:true,
    },
    confpassword :{
        type:String,
        // required:false,
    },
})

const StudentModel = mongoose.model('Student',StudentSchema)
module.exports = StudentModel