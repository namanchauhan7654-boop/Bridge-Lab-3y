// Q1: Student result processing using class and reduce()

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        if (this.marks.length === 0) {
            throw new Error("Marks list cannot be empty.");
        }

        const totalMarks = this.marks.reduce((total, mark) => total + mark, 0);
        return totalMarks / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();

        if (average >= 80) return "A";
        if (average >= 60) return "B";
        if (average >= 40) return "C";
        return "F";
    }
}

// Test with three students.
const students = [
    new Student("Aarav", [85, 90, 88]),
    new Student("Diya", [70, 65, 75]),
    new Student("Rohan", [35, 42, 38])
];

students.forEach(student => {
    console.log(
        `${student.name}: Average = ${student.calculateAverage().toFixed(2)}, Grade = ${student.getGrade()}`
    );
});

// Grade scale used here: A >= 80, B >= 60, C >= 40, otherwise F.
