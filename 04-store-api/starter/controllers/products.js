const { query } = require('express')
const Product = require('../models/product')

const getAllProducts = async (req,res)=>{
    /* throw new Error('testing async errors') */
    const products = await Product.find({

        /*  featured:true */
         /* name:'entertainment center' */
         /* page:'2' */
        })
    res.status(200).json({products,nbHits: products.length})
}

const getAllProductsStatic = async (req,res)=>{

const { featured,company } = req.query
const queryObject = {}

if(featured){
    queryObject.featured = featured === 'true'? true :false
}

if(company){
    queryObject.company = company
}

console.log(queryObject);

    const products = await Product.find(queryObject)
    console.log(req.query);
    res.status(200).json({ products,nbHits: products.length })
}

module.exports  = {
    getAllProducts,
    getAllProductsStatic,
}