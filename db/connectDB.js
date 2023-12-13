const mongoose = require('mongoose')

// const live_url = 'mongodb+srv://shivhares2002:hESu0BGJHb8h8j8y@cluster0.0oyvaxi.mongodb.net/'
 const local_url = 'mongodb://127.0.0.1:27017/CourseRegister'

const connectDB =()=>{
    return mongoose.connect(local_url)

    .then(()=>{
        console.log('connection succesfully')
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB


// mongoose.connect('mongodb://127.0.0.1:27017/CourseRegister',{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log('connection succesfully');
// }).catch((e)=>{
//     console.log("failed");
// })