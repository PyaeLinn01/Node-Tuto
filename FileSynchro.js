let fs = require('fs');
let data = "Playing guitar can be an extremely satisfying and rewarding."
            
//fs.writeFileSync("test.txt", data);
fs.readFileSync('test.txt','utf-8');
console.log(data);


fs.writeFileSync('mine.txt',data);