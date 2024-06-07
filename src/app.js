const express = require("express")
const hbs = require("hbs")
const app = express()
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")
const Service=require("./models/Service")
// all routes import karne hai use karne ke liye 
const routes= require('./routes/main')

// BodyParser routes se pahle aayega 
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('',routes)
// /static/public/css/style.css
app.use('/static', express.static("public"))

// Template engine like as PUG SPECIFIC STUFF
// Yaha par hamne path.join(__dirname,'views') use nahi kiya kyoki views directory app.js se bahar hai parallel nahi hai 
app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")


// db connections 
// mongoose.connect("mongod://localhost/website_tut",()=>{
    // }) Error Show But once try to uninstall mongoose
    mongoose.connect('mongodb://localhost:27017/website__tut',()=>{
        console.log("db connected")
        // Detail.create({
        //     brandName:"Info Technical Solutions",
        //     brandIconUrl:"https://imgs.search.brave.com/5fv-eRMWzN3a0jLrZV5OX7lcHOhiRr7XMsVOZXGBvQQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzAyLzk3LzUy/LzM2MF9GXzEwMjk3/NTI4OF9MNGFxamx4/WG9acmtnMENWdkJY/bW5TNzhvYlVZOU5G/TC5qcGc",
        //     links:[
        //         {
        //           label:"Home",
        //           url:"/" 
        //         },
        //         {
        //           label:"Services",
        //           url:"/services" 
        //         },
        //         {
        //           label:"Gallery",
        //           url:"/gallery" 
        //         },
        //         {
        //           label:"About",
        //           url:"/about" 
        //         },
        //         {
        //           label:"Contact us",
        //           url:"/contact-us" 
        //         },
        //     ]  
        // });

        // Slider.create([
        //     {
        //         title:'Learn Java in very easy manner',
        //         subTitle:'Java is one of the most popular language',
        //         imageUrl:"/static/images/s2.jpg"
        //     },
        //     {
        //         title:'What is mongodb in web development?',
        //         subTitle:'Mongodb is nonsql database',
        //         imageUrl:"/static/images/s3.jpg"
        //     },
        //     {
        //         title:'What about node.js?',
        //         subTitle:'Node.js is runtime environment to execute javascript outside browser ',
        //         imageUrl:"/static/images/s1.jpg"
        //     }
        // ]);
        // Service.create([
        //     {
        //         icon:'fab fa-accusoft',
        //         title:'Provide best Courses',
        //         description:'We provide best courses that helps us student in placement and learning coding ',
        //         linkText:'https://www.prakashchoudharytech.com',
        //         link:'Check'
        //     },
        //     { 
        //         icon:'fab fa-affiliatetheme',
        //         title:'Learn Projects',
        //         description:'We provide best courses that helps us student in placement and learning coding ',
        //         linkText:'https://www.prakashchoudharytech.com',
        //         link:'learn'
        //     },
        //     {
        //         icon:'fab fa-affiliatetheme',
        //         title:'Learn Projects',
        //         description:'We provide best courses that helps us student in placement and learning coding ',
        //         linkText:'https://www.prakashchoudharytech.com',
        //         link:'learn'
        //     },
        // ])

});

app.listen(process.env.PORT | 5556, ()=>{
    console.log("Server started")
})
   