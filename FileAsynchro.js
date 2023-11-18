let fs = require('fs');

/*fs.readFile('asy.txt','utf-8',function(err,result){
    if(err)
        console.log(err);
    else
        console.log(result);
    
})*/




/*fs.writeFile('asy.txt','Winter is coming!',function(err){
    if(err)
        console.log(err);
    else
        console.log("File successfully write!");

});*/

fs.appendFile('asy.txt','Finally',function(err){
    if(err)
        console.log(err);
    else
        console.log("File append success");
})
