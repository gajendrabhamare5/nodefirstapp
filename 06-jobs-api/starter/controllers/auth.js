const User = require('../models/User');
const { StatusCode } = require('http-status-codes');
const {BadRequestError} = require('../errors')
const bcrypt = require('bcryptjs')

const register = async (req,res) =>{

  /*   const {name, email, password } = req.body

const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password,salt)

    const tempUser = {name,email,password:hashedPassword} */

/* const {name,email,password} = req.body
if(!name || !email || !password){
throw new BadRequestError('Please provide name,email or password')
} */

const user = await User.create({...req.body})

    req.status(StatusCode.CREATED).json(user)

 /*    try {

        const newUser = await User.create(req.body);


        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {

        console.error('Error registering user:', error);
        res.status(500).json({ message: 'An error occurred while registering user' });
    } */

}

const login = async (req,res) =>{
    /* req.send('login user') */

    try {

        res.status(200).json({ message: 'User logged in successfully' });
    } catch (error) {

        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'An error occurred while logging in user' });
    }

}

module.exports = {
register,
login,
}