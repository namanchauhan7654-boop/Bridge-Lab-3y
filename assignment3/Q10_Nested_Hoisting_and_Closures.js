"use strict";

// Q10 – Nested Hoisting and Closures

/*
  ORIGINAL CODE:
  function outer() {
    console.log(count);          // undefined  (var count is hoisted inside outer)
    var count = 5;
    function inner() {
      console.log(count);        // undefined  (separate var count hoisted inside inner)
      var count = 10;
    }
    inner();
  }
  outer();

  PREDICTED OUTPUT:
  undefined
  undefined

  EXPLANATION – SEPARATE MEMORY CONTEXTS:
  - Each function creates its own Variable Environment / Lexical Environment.
  - outer has its own 'count' binding (hoisted → undefined, then assigned 5).
  - inner has a completely separate 'count' binding (also hoisted → undefined, then 10).
  - The inner console.log sees the local (inner) count, not the outer one.
  - This is classic shadowing caused by hoisting of var.
*/

console.log("===== Original behavior (recreated safely) =====");

function outer() {
  console.log("outer before assign:", count); // undefined
  var count = 5;
  console.log("outer after assign :", count); // 5

  function inner() {
    console.log("inner before assign:", count); // undefined (own binding)
    var count = 10;
    console.log("inner after assign :", count); // 10
  }
  inner();
  console.log("outer after inner  :", count); // still 5 (unaffected)
}
outer();

console.log("\n===== Converted inner to Arrow Function =====");
/*
  Arrow functions do NOT have their own 'this', 'arguments', or (when using var) 
  a completely separate scope for variables in the same way if we remove the var.
  But if we still declare var count inside the arrow, it still creates a function-scoped binding
  relative to the nearest function (outer), because arrows do not create a new function scope
  for var – wait: actually var is function-scoped to the enclosing function, not to the arrow.

  Important: arrow functions do not have their own variable environment for var.
  A var declared inside an arrow is still scoped to the enclosing function.
*/

function outerArrow() {
  console.log("outerArrow before:", count);
  var count = 5;

  const innerArrow = () => {
    // Because there is no 'var count' here, it looks up to outerArrow's count
    console.log("innerArrow sees :", count); // 5 (closure over outer)
    // If we wrote: var count = 10; it would still be hoisted to outerArrow!
  };
  innerArrow();
  console.log("outerArrow after :", count);
}
outerArrow();

console.log("\n===== Clean modern version using let =====");
function outerModern() {
  let count = 5;
  console.log("outerModern:", count);

  const innerModern = () => {
    // New block scope if we use let inside
    let count = 10;
    console.log("innerModern:", count);
  };
  innerModern();
  console.log("outerModern still:", count);
}
outerModern();

/*
  DEBUG SESSION NOTES:
  - Place breakpoints on each console.log.
  - In the Scope pane you will see two different 'count' bindings when var is used in nested functions.
  - With arrow + no local var, only one binding appears (closure).
  - Call Stack: outer → inner (or outerArrow → innerArrow).
*/
