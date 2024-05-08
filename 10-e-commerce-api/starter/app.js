require('dotenv').config();
require('express-async-errors')

//express
const express = require('express')
const app = express()

//rest of the packages
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

// Routers
const authRouter = require('./routes/authRoutes')

//Database
const connectDB = require('./db/connect')

//middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(morgan('tiny'))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET));

app.get('/',(req,res) =>{
   /*  throw new Error('hello there') */

    res.send('e-commerce api')
})

app.get('/api/v1',(req,res) =>{
    /*  throw new Error('hello there') */
    console.log(req.signedCookies);
     res.send('e-commerce api')
 })

app.use('/api/v1/auth',authRouter);

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 5000

const start = async () =>{

try {
    await connectDB(process.env.url)
    app.listen(port,console.log(`Server is listening on port ${port}...`))
} catch (error) {
    console.log(error);
}
};



start();
