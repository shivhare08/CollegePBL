const express = require('express')
const app = express()
const port = 2580
const web = require("./route/web")
const connectDB = require('./db/connectDB')
const bodyParser = require('body-parser')




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//for req.body and more
app.use(express.urlencoded({extended:false}))

//=====ROUTER====//
app.use('/',web)

//Public file
app.use(express.static('public'))

//===MONGODB===//
connectDB();

//====VIEWFOLDER SETTING===//
app.set('viewengine','ejs')

//===========LOCALHOST SERVER=========================//
app.listen(port,(req,res)=>{
    console.log(`your local localhost:${port}`);
})