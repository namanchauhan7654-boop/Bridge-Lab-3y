"use strict";

// Q4 – Debugging Mystery

/*
  ORIGINAL PROBLEMATIC CODE:
  "use strict";
  function showMessage() {
    greeting = "Welcome"; // undeclared
    console.log(greeting);
  }
  showMessage();

  WHY IT THROWS AN ERROR UNDER STRICT MODE:
  - In non-strict mode, assigning to an undeclared variable silently creates a global variable.
  - In "use strict" mode, assignment to an undeclared variable throws ReferenceError.
  - This prevents accidental global pollution and makes bugs easier to catch.

  SCOPE DECLARATION RULES CHANGED:
  - Strict mode requires explicit declaration (let, const, or var) before assignment.
  - The identifier 'greeting' is not found in the local or outer scopes, so ReferenceError is thrown.
*/

// ===== FIXED VERSION =====
function showMessage() {
  // Correct: declare the variable in the proper scope
  let greeting = "Welcome";
  console.log(greeting);
}

showMessage();

/*
  DEBUG OBSERVATIONS (VS Code):
  1. Set a breakpoint on the line: let greeting = "Welcome";
  2. Add 'greeting' to the Watch panel → it will be undefined until the line executes.
  3. Step Over (F10) → greeting becomes "Welcome".
  4. Call Stack shows: showMessage() → (anonymous) or global.
  5. Scope pane clearly shows 'greeting' under Local scope of showMessage.
*/

console.log("Q4 completed successfully – no ReferenceError under strict mode.");
