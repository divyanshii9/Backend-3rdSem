// function cal(){
//     let a=parseInt(prompt("Enter age"));
//     if(a>=18){
//         let a=confirm("do u want to cast vote");
//             if(a){
//             alert("yes u can vote");
//          }
//          else{
//             alert("okay then leave ");
//          }
//         }
    
//     else{
//         alert("you cannot vote");
//     }
// }

// function fn(f){
//     var first=f;
//     return first;
// }
// function ls(v){
//     var last=v;
//     return last;

// }
// function display(){
//     fs=fn("vikas");
//     ln=ls("chaudhary");
//     console.log(fs+" "+ln);
// }

function printt(){
    let a=parseInt(prompt("enter no of vertical line"));
    for(i=0;i<a;i++){
        for(j=0;j<i+1;j++){
            document.write("*");
        }
        document.write("</br>");
    }
}
function newpattern(){
     let b=parseInt(prompt("enter no of vertical line"));
    for(i=0;i<b;i++){
        for(j=0;j<i+1;j++){
            document.write("*");
        }
        document.write("</br>");
    }
      for(i=b;i>=0;i--){
        for(j=0;j<=i;j++){
            document.write("*");
        }
        document.write("</br>");
    }
}

