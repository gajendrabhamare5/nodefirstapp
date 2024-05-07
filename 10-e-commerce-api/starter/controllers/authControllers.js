const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors');

const register = async (req, res) => {
    /* res.send('Register User') */

const {email} = req.body
const  emailAlreadyExists = await User.findOne({email})
if(emailAlreadyExists){
throw new CustomError.BadRequestError('Email Already exists')
}

    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({ user })
};
const login = async (req, res) => {
    res.send('Login User')
};
const logout = async (req, res) => {
    res.send('Logout User')
};

module.exports = {
    register, login, logout
}