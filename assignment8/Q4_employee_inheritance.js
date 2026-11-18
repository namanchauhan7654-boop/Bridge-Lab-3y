// Q4: Employee and Manager inheritance with runtime polymorphism

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(`${this.name} is working in the ${this.department} department.`);
    }
}

class Manager extends Employee {
    // Override the inherited work() method.
    work() {
        console.log(`${this.name} is managing the ${this.department} department.`);
    }
}

const employee1 = new Employee("Aman", "Development");
const manager1 = new Manager("Neha", "Sales");

// Same method call, different behavior depending on the object.
const team = [employee1, manager1];
team.forEach(person => person.work());

// This is runtime polymorphism: the object's class determines which
// implementation of work() runs.
