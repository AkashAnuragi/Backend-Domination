const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testingadvdbcommands");

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    passward:String,
    age:String,
    isMarried: Boolean,
    email: String
})

module.exports = mongoose.model('user',userSchema);