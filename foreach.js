let ary = ["John Wick","Robert","Hit man","Liam Neeson"];
/*for(let i = 0; i<ary.length; i++){
    var index = i; 
    console.log("Staff " + ++index + " is " + ary[i] + ".");
}
*/
var i = 1;
ary.forEach(function(data){
    console.log("Staff " + i++ + " is " + data + ".");
})