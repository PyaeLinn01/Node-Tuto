var http = require('http');
var port = 3000;
var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("Hello John Wick.");
});

server.listen(port,function(){
    console.log("Server is running at Port "+port);

});

