let fs = require('fs');
let myReadableStr = fs.createReadStream('test.txt','utf-8');
let myWriteStr = fs.createWriteStream('new.txt');

myReadableStr.on('data',function(chunk){
    myWriteStr.write(chunk);
})