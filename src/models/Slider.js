const mongoose = require("mongoose")

const Slider=mongoose.Schema({
    title:String,
    subTitle:String,
    imageUrl:String,
    class:String
})
module.exports=mongoose.model("Slider",Slider)