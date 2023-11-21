var http = require('http');
var fs = require('fs');

var myReadStr = fs.createReadStream('test.txt','utf-8');

var server = http.createServer(function(req,res){
    myReadStr.pipe(res);
    res.writeHead(200, {"x-content-Type":'text/html'});
});

server.listen(3000,function(){
    console.log('Server is running at port 3000');
});