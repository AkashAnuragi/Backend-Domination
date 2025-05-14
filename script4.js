const fs = require('fs');
fs.writeFile("extra.txt","Hello Akash", function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File Created...");
    }
})