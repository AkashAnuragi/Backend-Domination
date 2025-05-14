

//  Learn Express
// Express import (ESM style)
const express = require('express');
const expressSession = require('express-session');
const flash = require('connect-flash');
const cors = require('cors');

// app.use(cors());
const app = express();
app.use(expressSession({
  secret: "random Stuff",
  resave: false,
  saveUninitialized:false
}));

app.use(flash());

app.get("/", (req, res, next) => {
  req.flash("error", "Invalid Crededntials");
  res.redirect("/error");
})

app.get("/error", (req, res, next) => {
  let message = req.flash('error');
  res.send(message);
})

app.get("/banned", (req, res, next) => {
  res.cookie("banned","true");
  res.send("banned");
})


// // Root route - localhost:3000//
// app.get('/', (req, res) => {
//   res.send('Hello World')
// });

// // About route - localhost:3000/about
// app.get('/about', (req, res) => {
//   res.send('Hello World! this is about page')
// });

// // app.get("*", (req, res) => {
// //     res.send('Hello World! this is about page')
// //   });


// app.get("/create", (req,res,next) => {
//   req.session.polo = true;
//   res.send("done..");
// })

// app.get("/check",(req, res, next) =>{
//   console.log(req.session.polo); 
// })

// Server listening on port 3000
app.listen(3000)
