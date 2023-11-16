var students = ["John Wick","Robert","Hit man","Liam Neeson"];

/*for(var i = 0; i < students.length; i++)
{
    console.log(students[i]);
}*/

for(let i of students){
    console.log(i);
}

for(let i in students){
    console.log(i);
}