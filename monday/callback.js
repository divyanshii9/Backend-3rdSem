function greetuser(name,callback){
    console.log("Hello"+name);
    callback();
}
greetuser("Bob",function{
    console.log("Executed");
});
conosle.log("Start")
setTimeout(function( ){
    conosole.log("Task completed")
},2000)
console.log("end")



//other example
function printName(){
    console.log("Utkarsh");
}
printName();
console.log("Welcome");
function printName(){
    setTimeout(()=>{
        console.log("Utkarsh");
    },2000);
}