let http = require('http');
let url = require('url');

let routes = {
    "GET": {
        "/":() => console.log("GET and Path is /"),
        "/home":() => console.log("GET and Path is HOME")
    },
    "POST" : {
        "/":() => console.log("POST and Path is /"),
        "/about":() => console.log("POST and Path is About")
    }
}

let start = (req,res)=>{
   let reqMethod = req.method;
   let urlPars = url.parse(req.url,true);
   console.log(urlPars.pathname);
};

let server = http.createServer(start);

server.listen(3000,function(){
    console.log('Server 3000 is running..');
});