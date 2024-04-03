const { connect } = require("mongoose");

const mongoose = require("mongoose")


const connectDB = (url)=>{
return mongoose.connect( url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  })
}

module.exports = connectDB


  /* .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err.message)); */