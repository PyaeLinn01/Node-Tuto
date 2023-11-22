var http = require('http');
var fs = require('fs');


var myReadStr = fs.createReadStream('index.html','utf-8');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    myReadStr.pipe(res);
});

server.listen(3000,function(){
    console.log("Server is running");
})