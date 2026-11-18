// Q3: Arrow function vs normal function and the value of this

const user = {
    name: "Naman",

    // Arrow functions do not get their own this.
    // Here, this is inherited from the surrounding scope.
    showName: () => {
        console.log("Arrow function:", this.name); // Usually undefined
    }
};

user.showName();

// Fix: use a normal method function.
// A normal function gets this from the object used to call it.
user.showName = function () {
    console.log("Normal function:", this.name);
};

user.showName();

// Output in a typical Node.js file:
// Arrow function: undefined
// Normal function: Naman
