const express = require('express');
const app = express();
const userModel = require('./models/user-model');
const postModel = require('./models/post-model');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/create", async (req, res, next)=>{
    let createduser = await userModel.create({
        username: req.body.username,
        email: req.body.email,
        passward: req.body.passward
    })

    res.send(createduser);
});

// app.post("/:username/create/post", async (req, res, next) => {
//     try {
//         let user = await userModel.findOne({ username: req.body.username });
//         if (!user) return res.status(404).send("User not found");

//         user.posts.push({ content: "Hi! I am Akash Anuragi. This is my Second post.." });
//         await user.save(); // ✅ Save the updated user

//         res.send(user);
//     } catch (err) {
//         res.status(500).send(err.message);
//     }
// });



// For referencing
app.post("/:username/create/post", async (req, res, next) => {
    try {
        let user = await userModel.findOne({ username: req.params .username });
        if (!user) return res.status(404).send("User not found");

        // user.posts.push({ content: "Hi! I am Akash Anuragi. This is my Second post.." });
        
       let createdPost = await postModel.create({
            content:"akash akash aksha aaskashakashsak aksh aksjh",
            user: user._id,
         }); 

         user.posts.push(createdPost._id);
         await user.save(); // ✅ Save the updated user


        res.send({user,createdPost});
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
  

