let fs = require('fs');
let myReadStr = fs.createReadStream('test.txt','utf-8');
let myWriteStr = fs.createWriteStream('new.txt');

myReadStr.on('data',function(){
    //myReadStr.write(chunk);
    myReadStr.pipe(myWriteStr);
})