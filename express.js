let express = require('express');
let app = express();

app.get('/',function(req,res){
    res.send('Home Page');
});

app.get('/about',function(req,res){
    res.send('About page');
});

app.get('/contact',(req,res)=>{
    res.send('Contact Page');
})

app.listen(3000);