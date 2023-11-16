/*setTimeout(function(){
    console.log("I have already waited for 3 seconds.")
},3000);*/

let i = 0;

var myinter = setInterval(function(){
    i++;
    if(i == 5)
        clearInterval(myinter)
    else
        
    //console.log(`I am working ${i}`)
    console.log("I am working "+ i)
},1000);
