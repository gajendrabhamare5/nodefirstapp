const mongoose = require('mongoose');

const connectDB = (url) => {

  return mongoose.connect(url);
};


module.exports = connectDB;

/* const connectDB = (url) => {

  return mongoose.connect(url)
    .then(() => {
      console.log('Connected to database');
    })
    .catch((error) => {
      console.error('Error connecting to database:', error);
      throw error;
    });
};

module.exports = connectDB; */
