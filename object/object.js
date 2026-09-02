let d={
    marks:75,
    grad:"A",
    modify:function(){
        this.marks=this.marks+5;
        this.marks=this.grad+ "+";
    },
    show:function(){
        console.log("My marks are: ",this.marks);
          console.log("My grades are: ",this.grad);

    }
}
//this isa keyword whoever 
// objects calls the function it access that object members

let student1 = {
    name: "Rahul",
    marks: 75,

    show: function() {
        console.log(this.name);
        console.log(this.marks);
    }
};

let student2 = {
    name: "Aman",
    marks: 90,

    show: function() {
        console.log(this.name);
        console.log(this.marks);
    }
};


//ques create a function clg and use 
// depatment and class as object and 
// display the details