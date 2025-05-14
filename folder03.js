const fs = require('fs');
fs.rm("Akash",{recursive:true}, function(err){
    if(err) console.log(err);
    else console.log("Deleted...");
})