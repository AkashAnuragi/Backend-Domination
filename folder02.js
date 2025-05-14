const fs = require('fs');
fs.readdir("Akash", {withFileTypes:true}, function(err,files){
    if(err) console.log(err);
    else console.log(files);
})