const mongoose = require("mongoose");
const configs = require("../config/configs");

module.exports =async ()=>{
const connection = await mongoose.connect(configs.DATABASE,{

    })
    console.log("database established");
    return connection;
}