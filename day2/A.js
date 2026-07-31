// console.log("--variables---");
// var f_name="Divyanshii";
// var l_name="Bhatia";
// console.log(f_name);
// console.log(l_name);

console.log("---if else---");
var a=20;
var b=6;
if(a>b){
    console.log("A is greater, valueof A=" ,a);

}
else{
    console.log("B is greater, value of B =" ,b);

}
function abes(){
    console.log("welcome to students");
    console.log("welcome to node.js");
}
abes();
abes();

function greet(fname,lname){
    cosnole.log("Hello",fname,lname);
}
greet("Utkarsh" , "Dixit");
greet("Waseen","Sir");

consol.log("---Function name---");
function add(x,y){
    return x+y;
}
var result=add(20,30);
console.log("Sum=",result);


console.log("---deafult argument");
function fullName(fname="ABES",lname="Engineering College"){
    return fname+" "+lname;
}
console.log(fullName());
consle.log(fullName("Utkarsh","Dixit"));


console.log("---Percentage---");
function totalMarks(math,english,science){
    return math + english+ science;

}
funtion percentage(total){
    return(total/300)*100;
}
var total=totalMarks(80,75,90);
console.log("Total Marks=" ,total);
console.log("percentag=",percentage(total)+"%");