const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://bernardansah5:bernardansah52025@cluster0.7eo0ad3.mongodb.net/");
    console.log('Mongodb connected');
  } catch (error) {
    console.error('Mongodb connection failed', error);
    process.exit(1);
  }
}

module.exports = connectDB;