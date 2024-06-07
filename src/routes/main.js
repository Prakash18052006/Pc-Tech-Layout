// routes saare yaha par honge 
const express=require('express')
const { route } = require('express/lib/application')

const Detail = require("../models/Detail")
const Slider = require("../models/Slider")
const Service = require("../models/Service")
const Contact = require("../models/Contact")
const routes=express.Router()

routes.get("/", async (req, res)=>{
    const details= await Detail.findOne({"_id":"665ab8453df13763ff09fb59"})
    const slides= await Slider.find()
    // console.log(details)
    // console.log(slides)

    const services=await Service.find()

    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })
}) 

routes.get("/gallery", async (req, res)=>{
    const details= await Detail.findOne({"_id":"665ab8453df13763ff09fb59"})

    res.render("gallery",{
        details:details
    } )
}) 




// Process of contact form
routes.post("/process-contact-form",async (req, res)=>{
    console.log("Form is submitted ")
    console.log(req.body)
    // save the data to db we use mongoose
    try{    
       const data=Contact.create(req.body) 
       console.log(data)
       res.redirect("/")
    }catch(e)
    {
        console.log(e)
        res.redirect("/")
    }
})

module.exports = routes                                 