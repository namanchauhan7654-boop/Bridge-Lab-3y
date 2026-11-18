// Q9: Predict and verify the event loop execution order

// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Explanation:
// Synchronous statements execute first. Once the call stack is empty,
// Promise callbacks in the microtask queue run before timer callbacks
// in the macrotask (task) queue. Therefore, the Promise callback appears
// before the setTimeout callback, even though the timer delay is 0.
