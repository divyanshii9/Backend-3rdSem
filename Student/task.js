// 4- Student Grade
// Craete a object with:
// name:"Ravi"
// marks:80
// grade:"A"
// Craete a Method UpdateGrade() that changes the grade to:
// A+
// using the this keyword

const student={
    name:"Ravi",
    marks:99,
    grade:"A",
    
   update: function(){
    this.grade="A+";
   }
}
student.update();
console.log(student);
