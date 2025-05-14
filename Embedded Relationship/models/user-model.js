const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testingdbreference");

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    passward:String,
    posts:[ 
        {
            type:mongoose.Schema.ObjectId,
            ref:"Post"
        }  
],
});

module.exports = mongoose.model("User",userSchema);