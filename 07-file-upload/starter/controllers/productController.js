const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes');
// const {statusCodes} = require('http-status-code')

const createProduct = async (req,resp)=>{

    console.log(req.body);
     const product = await Product.create(req.body)
    resp.status(StatusCodes.CREATED).json({ product })
}
const getAllProduct = async (req,resp)=>{
    const products = await Product.find({})
    resp.status(StatusCodes.OK).json({products})
}

module.exports = {
    createProduct,
    getAllProduct,
};