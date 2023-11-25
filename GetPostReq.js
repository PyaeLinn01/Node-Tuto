let http = require('http');

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
   let path = req.url;
   routes[reqMethod][path]();
};

let server = http.createServer(start);

server.listen(3000,function(){
    console.log('Server 3000 is running..');
});