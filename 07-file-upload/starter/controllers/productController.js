const { StatusCodes } = require('http-status-codes');
const Product = require('../models/Product')
const {statusCodes} = require('http-status-code')

const createProduct = async (req,resp)=>{
    // resp.send('create product')
    console.log(req.body);
    const product = await Product.create(req.body)
    res.statusCodes(StatusCodes.CREATED).json({ product })
}
const getAllProduct = async (req,resp)=>{
    resp.send('list of all products')
}

module.exports = {
    createProduct,
    getAllProduct,
};