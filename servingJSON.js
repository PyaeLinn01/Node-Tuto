var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    var obj = {
        name : "Mg Mg",
        age : 30,
        family : {
            father : "U Mya",
            mother : "Daw Moe"
        }
    }
    res.end(JSON.stringify(obj));
});

server.listen(3000,function(){
    console.log('Server 3000 is running');
})