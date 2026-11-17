// Q6. Event-Based Counter Simulation
let count = 0; // Global counter variable

function increment() {
  // Nested function to show function scope of count updates
  function updateCount() {
    count++;
    console.log("After increment → current count =", count);
  }
  updateCount();
}

function decrement() {
  // Nested function to show function scope of count updates
  function updateCount() {
    count--;
    console.log("After decrement → current count =", count);
  }
  updateCount();
}

// Simulate “click” by calling these functions manually
console.log("Initial count:", count);
console.log("--- Simulating clicks ---");
increment(); // click +
increment(); // click +
decrement(); // click -
increment(); // click +
decrement(); // click -
decrement(); // click -
console.log("Final count:", count);
