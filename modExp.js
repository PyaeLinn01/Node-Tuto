var fonky = function(){
    console.log("I am fonky method")
}

var goofy = function(){
    console.log("I am goofy method")
}

//module.exports.fonky = fonky;
//module.exports.goofy = goofy;

module.exports = {
    fonky : fonky,
    goofy : goofy
}