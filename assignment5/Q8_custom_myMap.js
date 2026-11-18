// Q8: Add a custom myMap() method to all arrays

Array.prototype.myMap = function (callback) {
    const result = [];

    for (let index = 0; index < this.length; index++) {
        // Match map(): skip empty slots in sparse arrays.
        if (index in this) {
            result.push(callback(this[index], index, this));
        }
    }

    return result;
};

const numbers = [1, 2, 3];
const doubled = numbers.myMap(number => number * 2);

console.log(doubled); // [ 2, 4, 6 ]

// Note: In real projects, avoid modifying built-in prototypes.
