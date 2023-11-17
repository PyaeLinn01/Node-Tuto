let fs = require('fs');
let data = "Playing guitar can be an extremely satisfying and rewarding."
            
fs.writeFileSync("test.txt", data);