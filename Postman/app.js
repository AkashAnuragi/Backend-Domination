const express = require('express'); 
const app = express();

const data = [1,2,3,4];

app.get("/check" ,(req, res) => {
    res.send("working")
})

app.get("/data" ,(req, res) => {
    res.send(data); 
})
app.post("/data/:number" ,(req, res) => {
   data.push(parseInt(req.params.number)); 
   res.send(data);
})

app.listen(3000);