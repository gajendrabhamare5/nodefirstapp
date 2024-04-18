const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    categories:String
})

module.exports = mongoose.model("products",productSchema)
