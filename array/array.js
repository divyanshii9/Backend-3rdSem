console.log("\n=====string method=======");
let str="Welcome Javascript";

// 1.toUpperCase()
console.log("Uppercase=",str.toUpperCase());

// 2.toLowerCase()
console.log("LowerCase=",str.toLowerCase());


// 3.CharAt
console.log("Character at index",str.charAt(3));

// 4.indexof
console.log("Index of Java=",str.indexOf("Java"));

//5.lastindexof()
let message="Javscript is easy. Javscript is Powerful";
console.log("last index",message.lastIndexOf("Javscript"));


// 6.slice()
console.log("Slice",str.slice(0,7));

// 7.split()
let data="HTML,CSS,JAVASCRIPT";
let result=data.split(',');
console.log("Split=",result);

// 8.replace
let text="I love Java";
console.log(text.replace("Java","Javscript"));


// 9.concat
let first="Utkarsh";
let last="Dixit";
console.log(first+last);


// 10.include
let course="Javascript";
console.log(course.includes("Javascript"));


// 11.unshift()
number=[10,20,30,40,50,60];
console.log(number.unshift());


// 12.shift()
console.log(number.shift());

// 12.date

let date= new Date();
console.log(date);


// 13.get date
console.log(date.getDate());

// 13.getmonth()
console.log(date.getMonth());