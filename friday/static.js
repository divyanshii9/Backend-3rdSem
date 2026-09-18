class a{
    static name="This is static variable";
    static display(){
        console.log(a.name);
    }
}
a.display();


//static method with instance without constructor
class User {
  static g() {
    return "divyanshi";
  }
}

console.log(User.g()); 
//UNiversity Student Management SystemCreate a Student Class having roll no,name ,marks.
// Initialise the properties using a constructor create a 
// instance method display result,that display student 
// details and determine whether a student has passed .
// Create a static property method to maintain and display
//  the total marks of student  object created . create at
//  leats three student object and demonstrate all method

class Student{

    // Static property to maintain total marks
    static totalMarks = 0;

    // Constructor
    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;

        Student.totalMarks += marks;
    }
    displayresult(){
        console.log(this.rollno);
        console.log(this.marks);
    }
\    displayResult() {
        console.log("Roll No: " + this.rollNo);
        console.log("Name: " + this.name);
        console.log("Marks: " + this.marks);

        if (this.marks >= 40) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }

    }

    static displayTotalMarks() {
        console.log("Total Marks of all students: " + Student.totalMarks);
    }
}

let student1 = new Student(101, "Rahul", 75);
let student2 = new Student(102, "Priya", 35);
let student3 = new Student(103, "Amit", 60);
student1.displayResult();
student2.displayResult();
student3.displayResult()
Student.displayTotalMarks();


   
