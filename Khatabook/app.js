const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.send("hey");
});
app.get("/create", (req, res)=>{
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;

    fs.writeFile(`./files/${formattedDate}`, "daal cheeni", (err)=>{
        if(err) return res.send("something wnnt wrong.")
            else res.send("done");
    })
    
});

app.get("/read",(req,res)=>{
    fs.readdir(`./files`, (err,files)=>{
        res.render("index",{files} );     
    })
})

app.get("/edit/:filename",(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,data){
        if(err) return res.send(err);

        res.render("edit",{data,filename:req.params.filename})
    })
});

app.get("/delete/:filename",(req,res)=>{
    fs.unlink(`./files/${req.params.filename}`,function(err){
        if(err) return res.send(err);

        res.redirect ("/" );
    })
});


app.post("/update/:filename",(req,res)=>{
    fs.writeFile(`./files/${req.params.filename}`, req.body.filedata ,function(err){
        if(err) return res.send(err);

        res.redirect("/"); 
    })
});

app.listen(3000);