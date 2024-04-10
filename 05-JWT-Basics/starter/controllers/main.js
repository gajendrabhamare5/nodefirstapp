const jwt = require('jsonwebtoken')
const {BadRequestError} = require("../errors");

const login = async (req,res) =>{
    const {username,password}= req.body

if(!username || !password){
throw new BadRequestError('please provide email or username')
}

//just for demo , normally provided by db
const id = new Date().getDate()


//try to keep payload small,better experience for user
const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})



    /* res.send('Fake Login/Registration/Signup Route') */
    res.status(200).json({msg:'user created',token})

}

const dashboard = async(req,res) =>{
    const luckyNumber = Math.floor(Math.random()*100)

    res.status(200).json({msg:`Hello, ${username}`,secret:`Here is your authorization data, Your lucky number is ${luckyNumber}`})


}


module.exports = {
    login,
    dashboard
}