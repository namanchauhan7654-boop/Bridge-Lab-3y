"use strict";

// Q6 – Pyramid Pattern Generator

/*
  Generate:
  *
  * *
  * * *
  * * * *
*/

// Default limit (can be changed to simulate user input)
const rows = 4; // default = 4 to match the example; change to 5 for larger

console.log("===== Pyramid (using let) =====");
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line.trim());
}

/*
  OBSERVATION when replacing let with var:
  - With var, the loop variables are function-scoped (or global if not in function).
  - In modern engines the output looks the same for this simple case,
    but var can cause unexpected behavior in closures or async code because
    there is only one shared binding for i/j instead of a new binding per iteration.
*/

console.log("\n===== Same pyramid using var (for comparison) =====");
for (var i = 1; i <= rows; i++) {
  var line = "";
  for (var j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line.trim());
}
// After the loops, i and j still exist (because var is function/global scoped)
console.log("(After var loops) i =", i, ", j =", j);

/*
  DEBUG TIP:
  - Set breakpoint inside the inner loop.
  - Watch variables i and j.
  - With let you will see a new binding each iteration; with var the same binding is reused.
*/

console.log("\n===== Pyramid with outer limit (default 5) =====");
const userLimit = 5; // simulate user input; change this value
for (let r = 1; r <= userLimit; r++) {
  let stars = "";
  for (let c = 1; c <= r; c++) {
    stars += "* ";
  }
  console.log(stars.trim());
}

// "use strict" already catches undeclared variables.
// Example of what would fail under strict mode:
// for (k = 1; k <= 3; k++) { ... }  → ReferenceError: k is not defined
