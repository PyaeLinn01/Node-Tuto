/*function fun(){
    console.log("Function");
};
fun();

var myfunc = function(){
    console.log("I am function Expression!")
};
myfunc();*/ 

function func(val){
    val();
}

var myfun = function(){
    console.log("I am Expression!")
};

myfun();