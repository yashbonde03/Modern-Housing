const mongoose = require("mongoose");

const registrationschema= new mongoose.Schema({
    firstname : {
        type:String
    },
    lastname : {
        type:String
    },
    email : {
        type:String,
        unique:true
    },
    message :{
        type:String,
    }
})

const Registration =new mongoose.model("Registration",registrationschema);

module.exports =Registration;