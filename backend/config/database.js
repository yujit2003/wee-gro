const mongoose = require("mongoose");
const dotenv = require("dotenv");
const {DB_URI} = require("./env.js");

const connectDatabase = () => {

    mongoose.set('strictQuery', false);
    mongoose.connect(DB_URI, {
        useNewURLParser: true,
        useUnifiedTopology: true
    
    }).then((data => {
        console.log(`mongodb is connected to server: ${data.connection.host}`);
    })).catch((e) => {
        console.log(e);
    })

}
// password : hW89zkjQDZRc5WFW

module.exports = connectDatabase


    