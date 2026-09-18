class A {
    name = "Utkarsh";

    show() {
        console.log("Hello", this.name);
    }
}

const obj = new A();
obj.show();

//Write a class Sec-A and display the data of 5 students using constructor
class SecA {
    constructor(rollNo, name, age, course) {
        this.rollNo = rollNo;
        this.name = name;
        this.age = age;
        this.course = course;
    }

    display() {
        console.log(
            `Roll No: ${this.rollNo}, Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`
        );
    }
}

// Creating objects for 5 students
let student1 = new SecA(1, "Rahul", 20, "BCA");
let student2 = new SecA(2, "Priya", 19, "BCA");
let student3 = new SecA(3, "Aman", 21, "BCA");
let student4 = new SecA(4, "Neha", 20, "BCA");
let student5 = new SecA(5, "Rohit", 19, "BCA");

// Displaying student data
student1.display();
student2.display();
student3.display();
student4.display();
student5.display();