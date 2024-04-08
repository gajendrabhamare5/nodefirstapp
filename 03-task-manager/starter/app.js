const express = require ('express')
const app = express();
const tasks = require('./routes/tasks')
const morgan = require('morgan')
const createError = require('http-errors')
const connectDB = require('./db/connect')
const errorHandlerMiddleware = require('./middleware/error-handler.js')
require('dotenv').config()


//Middlewares
app.use(express.static('./public'))
app.use(express.json())
app.use(morgan('dev'));

//routes
/* app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
}) */

app.get('/api/v1/tasks',function(req,res){
    res.json(tasks);

})

/* app.use('api/v1/tasks',tasks) */


const port = 3000;

app.use(errorHandlerMiddleware)


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


  // Connect to MongoDB
connectDB()
.then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, console.log(`Server is running on port ${port}...`));
})
.catch(error => {
    console.error('Error connecting to database:', error);
    process.exit(1); // Exit the process if unable to connect to the database
});

// Error handling middleware
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something broke!');
});
