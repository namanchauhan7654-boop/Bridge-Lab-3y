"use strict";

// Q8 – Strict Mode Showdown

/*
  ORIGINAL CODE (problematic):
  function demo(a, a) {
    total = 10;
    delete total;
  }
  demo(5, 10);

  BEHAVIOR DIFFERENCES:

  WITHOUT "use strict":
  - Duplicate parameter names (a, a) are allowed (the second shadows the first).
  - Assigning to undeclared 'total' creates a global variable.
  - delete total; on a global variable may return true/false depending on configurability.
  - No errors are thrown; silent bad practices are allowed.

  WITH "use strict":
  - Duplicate parameter names → SyntaxError (illegal).
  - Assignment to undeclared variable → ReferenceError.
  - delete on a variable (not a property) → SyntaxError.
  Strict mode makes these operations illegal to prevent accidental globals,
  name collisions, and unexpected side-effects.
*/

console.log("===== Strict Mode is ACTIVE in this file =====");

// Correct ES6 version
function demoCorrect(a, b) {          // unique parameter names
  let total = 10;                     // properly declared
  console.log(`Parameters received: a=${a}, b=${b}`);
  console.log(`Local total = ${total}`);
  // delete total;  // still illegal – cannot delete a variable binding
  // Instead we can just let it go out of scope
}

demoCorrect(5, 10);

console.log("\nCorrect version ran successfully under strict mode.");
console.log("Key takeaway: Always declare variables and avoid duplicate parameters.");
