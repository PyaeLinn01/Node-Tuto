var event = require('events');
var myEmitter = new event.EventEmitter();
//Event Emitter => events
//Event Listen, emit


myEmitter.on('donow',function(val){
    console.log(`I am processing! ${val}`)
})
myEmitter.emit('donow',7);