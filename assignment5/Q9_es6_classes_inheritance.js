// Q9: Person -> Student inheritance using ES6 classes

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // Calls the Person constructor
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

const student1 = new Student("Naman", "CSE");

student1.showName();
student1.showBranch();

console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true

// Comparison:
// The constructor-function version (Q5) uses Object.create() and call().
// The class version uses extends and super().
// Both create the same inheritance relationship and allow Student
// objects to use methods defined by Person.
