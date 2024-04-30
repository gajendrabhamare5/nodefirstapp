const path = require('path')

const { StatusCodes } = require('http-status-codes');
const CustomeError = require('../errors');
// const {statusCodes} = require('http-status-code')

const uploadProductImage = async (req,res)=>{

    if(!req.files){
        throw new CustomError.BadRequestError('No File Uploaded');
    }

let productImage = req.files.image;

if(!productImage.mimetype.startsWith('image')){
    throw new CustomError.BadRequestError('Please Upload an image');

}

const maxSize = 1024 * 1024;
if(productImage.size > maxSize){
    throw new CustomError.BadRequestError('Please Upload image smaller than 1kb');
}

const imagePath = path.join(__dirname,'../public/uploads/'+`${productImage.name}`)
await productImage.mv(imagePath);
return res.status(StatusCodes.OK).json({image:{src:`uploads/${productImage.name}`}})

     res.send('upload product image')

    /* const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({ product }) */
}

module.exports = {
    uploadProductImage,

};