const fs = require('fs');
fs.appendFile('abcd.txt'," this data is append in this file..",function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("data is append");
    }
})