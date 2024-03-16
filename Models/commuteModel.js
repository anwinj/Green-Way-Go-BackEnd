const mongoose = require('mongoose')

const commuteSchema = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    commuteMethod:{
        type:String,
        required:true
    },
    kilometers:{
        type:Number,
        required:true
    },
    points:{
        type:Number,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const commutes = mongoose.model("commutes",commuteSchema)
module.exports = commutes