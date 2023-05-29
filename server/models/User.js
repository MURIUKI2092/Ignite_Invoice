const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        unique:false
    },
    lastname:{
        type:String,
        required:true,
        unique:false
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    location:{
        type:String,
        required:true,
        unique:false
    },
    password:{
        type:String,
        required:true,
        unique:false
    },
    
},
{timestamps: true}
);

module.exports = mongoose.model("User",UserSchema)
