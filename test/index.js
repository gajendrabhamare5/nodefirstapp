const mongoose = require('mongoose');
const express = require('express')

const port = process.env.PORT || 7000;
const app = express();

 mongoose.connect("mongodb://localhost:27017/test");
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number
    });

const saveInDB = async () => {

    app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
    );

    const Product = mongoose.model('users', ProductSchema);
    const data = new Product({
        name: "gajendra bhamare",
        price: 500
    })
    const result = await data.save();

}

const updateInDB =async ()=>{

    const Product = mongoose.model('user',ProductSchema)
    const data = await Product.updateOne(
        {name:"gajendra bhamare"},
        {$set:{price:200}}
    )
    console.log(data);
}

const deleteInDB = async ()=>{

    const Product = mongoose.model('user',ProductSchema)
const data = await Product.deleteOne({_id:"6620c8186adee4a3aab26a91"})
console.log(data);

}

const findInDB = async ()=>{

    const Product = mongoose.model('user',ProductSchema)
const data = await Product.find()
console.log(data);

}

findInDB()