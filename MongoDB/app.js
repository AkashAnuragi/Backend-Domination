const express = require('express');
const app = express();
const mongooseconnection = require("./config/mongoose");
const userModel = require('./Models/user');
const debuglog = require('debug')('development:app')

// Connect to MongoDB
require('./config/mongoose'); // No need to assign unless you're using the db object

// Basic route
app.get('/', (req, res,next) => {
    res.send('Hey, Now I am learning MongoDB.');
});


// Create Data
app.get('/create',async (req, res) => {
   let createduser = await userModel.create({
        username:"Katik ",
        name:"Kartik",
        email:"Kartikanuragi@gmail.com",
        passward:"password"
    })

    debuglog("user created.")
    res.send(createduser )
});

// Read data
app.get('/read', async (req, res,next) => {
   try{
    let user = await userModel.findOne({name:"Akash"});
    debuglog("Readed");
    res.send(user);
   } catch (error) {
    debuglog("Error reading user: ", error);
    res.status(500).send("Failed to read user.");
}
})

//Update data
app.get('/update', async (req, res,next) => {
   try{
    let user = await userModel.findOneAndUpdate({name:"Akash"}, {name:"Akash Anuragi"}, {new: true});
    debuglog("updated");
    res.send(user);
   } catch (error) {
    debuglog("Error reading user: ", error);
    res.status(500).send("Failed to update user.");
}
})

app.get('/delete', async (req, res,next) => {
    try{
     let user = await userModel.findOneAndDelete({name:"Akash"});
     debuglog("Deleted");
     console.log("deleted");
     res.send(user);
    } catch (error) {
     debuglog("Error reading user: ", error);
     res.status(500).send("Failed to read user.");
 }
 })

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
