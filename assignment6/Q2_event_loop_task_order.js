// Q2: Demonstrate microtasks and macrotasks

console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Expected order:
// Start
// Synchronous log
// End
// Promise callback (microtask)
// setTimeout callback (macrotask)
//
// Explanation:
// Synchronous code runs first. After the current call stack is empty,
// JavaScript processes queued microtasks (such as Promise.then()) before
// moving to the next macrotask (such as setTimeout()).
