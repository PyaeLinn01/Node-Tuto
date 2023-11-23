let http = require('http');
let server = http.createServer(function(req,res){
    let obj = {
        name : "John Wick",
        Job : "Assassin",
        Proficiency : "Revenge",
        weakness : "love",
        greatest : "calm"
    }
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(obj));
});

server.listen(3000, function(){
    console.log("Server is running!");
})