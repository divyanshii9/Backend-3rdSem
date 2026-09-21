// create a base class employee contatining id ,nameand basicsalary.initialise them using a constructor and create  a method calculate salary() that return the basic salary create a derieved class manager tha adds an incentive property
// .use super() to initialise inherited property and overrides calculate salary so that the manager total salary is calculated as basicsalary +incentive.create a object ofboth classes ad display their salary

class Employee {
    constructor(id, name, basicSalary) {
        this.id = id;
        this.name = name;
        this.basicSalary = basicSalary;
    }

    calculateSalary() {
        return this.basicSalary;
    }
}

class Manager extends Employee {
    constructor(id, name, basicSalary, incentive) {
        super(id, name, basicSalary);
        this.incentive = incentive;
    }

    calculateSalary() {
        return this.basicSalary + this.incentive;
    }
}

// Create objects
const emp = new Employee(101, "Rahul", 30000);
const manager = new Manager(102, "Amit", 50000, 10000);

// Display salaries
console.log("Employee Salary:", emp.calculateSalary());
console.log("Manager Salary:", manager.calculateSalary());

