let fs = require('fs');
let myReadableStr = fs.createReadStream('test.txt','utf-8');
myReadableStr.on('data',function(chunk){
    console.log("We got Buffer chunk!");
    console.log(chunk);
})