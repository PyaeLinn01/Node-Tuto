let http = require('http');

let start = (req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.method == "GET"){
        res.end("<h1>Get Request</h1>");
    }
    else {
        res.end("<h1>Post request</h1>");
    }
};

let server = http.createServer(start);

server.listen(3000,function(){
    console.log('Server 3000 is running..');
});