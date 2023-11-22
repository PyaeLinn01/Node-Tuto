var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
   if(req.url == "/" || req.url == "/home" || req.url == "/index"){
        var myReadStr = fs.createReadStream('index.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        myReadStr.pipe(res);
   }
    else if(req.url == '/about'){
        var myReadStr = fs.createReadStream('about.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        myReadStr.pipe(res);
    }
    else if(req.url == '/fbresult'){
        var myReadStr = fs.createReadStream('fbresult.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        myReadStr.pipe(res);
    }
    else if(req.url == '/api/fb'){
        var obj = {
            name : "Mg Mg",
            age : 20
        }
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("No file found");
    }
   
});

server.listen(3000,function(){
   console.log("Server is running.");
});