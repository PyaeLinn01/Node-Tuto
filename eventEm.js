var event = require('events');
var myEmitter = new event.EventEmitter();

myEmitter.on("startW",function(){
    console.log("I start working")
})

//myEmitter.emit('startW');
 var i = 0;
setInterval(function(){
    i++;
    if(i%3 == 0)
        myEmitter.emit("startW")
    else
        console.log("Waiting to emit.")
},1000)