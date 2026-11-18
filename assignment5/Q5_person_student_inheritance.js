// Q5: Inheritance using constructor functions and prototypes

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    Person.call(this, name); // Call Person constructor for the name property
    this.branch = branch;
}

// Student inherits methods from Person.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

const student1 = new Student("Naman", "CSE");

student1.showName();
student1.showBranch();

console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true
