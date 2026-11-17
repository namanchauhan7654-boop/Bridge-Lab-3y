"use strict";

// Q5 – Hoisting Lab: The Sequence Trap

/*
  ORIGINAL CODE (will throw):
  console.log(score);          // undefined (var is hoisted, initialized later)
  announce();                  // works – function declaration is fully hoisted
  var score = 50;
  function announce() { console.log("Game started"); }
  let status = "ready";
  startGame();
  function startGame() {
    console.log(status);       // ReferenceError – Temporal Dead Zone (TDZ) for let
  }

  HOISTING MEMORY STATE EXPLANATION:
  1. var score      → hoisted and initialized to undefined. Access before assignment → undefined.
  2. function announce → entire function body is hoisted. Can be called before definition.
  3. let status     → hoisted but stays in Temporal Dead Zone until the let line runs.
                     Accessing it before initialization throws ReferenceError.
  4. function startGame → fully hoisted, but the body tries to read 'status' which is still in TDZ.
*/

console.log("===== Fixed Version =====");

// FIXED: move declarations / initialization before use
var score = 50;
console.log("score =", score);           // 50

function announce() {
  console.log("Game started");
}
announce();

let status = "ready";

function startGame() {
  console.log("status =", status);       // "ready"
}
startGame();

console.log("\n===== Arrow Function Comparison =====");
/*
  Arrow functions are NOT hoisted the same way.
  They are function expressions assigned to variables.
  If declared with let/const they stay in TDZ; with var they are undefined until assigned.
*/

try {
  // This would fail if called before assignment
  // arrowAnnounce(); // ReferenceError if const/let
} catch (e) {
  console.log("Arrow before declaration would throw:", e.message);
}

const arrowAnnounce = () => console.log("Game started (arrow)");
const arrowStartGame = () => console.log("status (arrow) =", status);

arrowAnnounce();
arrowStartGame();

console.log("\nConclusion: Function declarations are fully hoisted; arrow functions follow variable hoisting rules.");
