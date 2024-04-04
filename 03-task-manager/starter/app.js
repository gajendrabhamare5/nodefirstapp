const express = require ('express')
const app = express();
const tasks = require('./routes/tasks')
const morgan = require('morgan')
const createError = require('http-errors')
const connectDB = require('./db/connect')
require('dotenv').config()

//Middlewares
app.use(express.static('./public'))
app.use(express.json())

//routes
/* app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
}) */

app.get('/api/v1/tasks',function(req,res){
    res.json(tasks);

})

app.use('api/v1/tasks',tasks)


const port = 3000;




const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is running on port ${port}...`))
        console.log('start...');
    } catch (error) {
        console.log(error);
    }
}

start()

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

