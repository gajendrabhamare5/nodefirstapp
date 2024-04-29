const Product = require('../models/Product')
const {statusCodes} = require('http-status-code')

const createProduct = async (req,resp)=>{
    // resp.send('create product')
    console.log(req.body);
}
const getAllProduct = async (req,resp)=>{
    resp.send('list of all products')
}

module.exports = {
    createProduct,
    getAllProduct,
};