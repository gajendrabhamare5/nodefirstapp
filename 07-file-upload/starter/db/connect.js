const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = () => {
  const url = process.env.DB_HOST;
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
