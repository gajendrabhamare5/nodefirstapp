const { connect } = require("mongoose");

const mongoose = require("mongoose")

const connectionString= 'mongodb+srv://gajendra:gaju123@nodeexpressprojects.hzdwbgj.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects'

const connectDB = (url)=>{
return mongoose.connect( connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  })
}

module.exports = connectDB


  /* .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err.message)); */