const mongoose = require("mongoose");
const configs = require("../config/configs");

module.exports = async ()=>{
const connection = await mongoose.connect(configs.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true

    });
    console.log("database established");
    return connection;
}