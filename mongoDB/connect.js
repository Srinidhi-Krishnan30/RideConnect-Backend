const mongoose = require("mongoose");
const connect_URI = "mongodb://localhost:27017/VechicleRent";


const connectDB = (async) =>{
    mongoose.connect(connect_URI).then(()=>{
    console.log("Connected to MongoDB Sucessfully...")
}).catch(()=>{console.log("Error in connecting to database")});
};

module.exports = connectDB;
