const express = require('express');
const app = express();
const userModel = require('./Models/user');  

const users = [
    { username: "john_doe", name: "John Doe", passward: "john123", age: "28", isMarried: false, email: "john@example.com" },
    { username: "jane_smith", name: "Jane Smith", passward: "jane456", age: "32", isMarried: true, email: "jane@example.com" },
    { username: "alex99", name: "Alex Johnson", passward: "alexpass", age: "25", isMarried: false, email: "alex.j@example.com" },
    { username: "nina_dev", name: "Nina Dev", passward: "nina321", age: "30", isMarried: true, email: "nina@example.com" },
    { username: "rohit_k", name: "Rohit Kumar", passward: "rohit999", age: "29", isMarried: false, email: "rohit@example.in" },
    { username: "aarav123", name: "Aarav Mehta", passward: "aarav789", age: "27", isMarried: false, email: "aarav@example.com" },
    { username: "sana_k", name: "Sana Khan", passward: "sana1234", age: "31", isMarried: true, email: "sana@example.com" },
    { username: "veer_rock", name: "Veer Rajput", passward: "veer@123", age: "26", isMarried: false, email: "veer@example.in" },
    { username: "meena87", name: "Meena Kumari", passward: "meena@87", age: "34", isMarried: true, email: "meena@example.com" },
    { username: "adi_007", name: "Aditya Singh", passward: "aditya007", age: "23", isMarried: false, email: "adi@example.com" },
    { username: "shreya_21", name: "Shreya Jain", passward: "shreya21", age: "29", isMarried: true, email: "shreya@example.com" },
    { username: "krish_b", name: "Krishna Bansal", passward: "krishb123", age: "33", isMarried: true, email: "krish@example.com" },
    { username: "lakshmi_dev", name: "Lakshmi Devi", passward: "lakshmi456", age: "35", isMarried: true, email: "lakshmi@example.in" },
    { username: "omprakash", name: "Om Prakash", passward: "omp@2025", age: "36", isMarried: true, email: "om@example.com" },
    { username: "zoya_ali", name: "Zoya Ali", passward: "zoyaali", age: "24", isMarried: false, email: "zoya@example.com" }
  ];

  
app.get("/", (req,res,next)=>{
    res.send("hey Akash")
});

app.get("/createmany",async (req,res,next)=>{
    const data = await userModel.insertMany(users);
    res.send(data);
});

app.get("/user",async (req,res,next)=>{
    const users = await userModel.find({age:{$ne:25}});
    // equal = $eq, not equal = $ne, less then = $lt, grater than = $gt, less than equal = $lte, greater than equal = $gte,
    //  in = $in (eg: $in:[23,30,27] ) isme sirf ye 3 hi age vale aayenge
    // not in = $nin (eg: $nin:[23,30,27] ) isme vo aayege jinki age 23,30,27 nahi hai
    // Exits = $exist 
    // And = $and eg({$and:[{isMarried:false}, {age:{$gte:23}}]})
    // OR = $or eg({$or:[{isMarried:false}, {age:{$gte:23}}]})
    res.send(users);
});

app.listen(3000);