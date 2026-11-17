// Q5. Boolean Logic Access System
// Variables for security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Access is granted only if:
// Alarm is on AND Door and window are closed AND Owner is inside
function checkSecurity() {
  const isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

  console.log(
    `Door Locked: ${isDoorLocked}, Window Closed: ${isWindowClosed}, Alarm On: ${isAlarmOn}, Owner Inside: ${isOwnerInside}`
  );
  console.log("Status:", isSecure ? "Secure" : "Unsafe");
  console.log("---");
}

// Test multiple outcomes
console.log("=== Test 1: All conditions true ===");
checkSecurity();

console.log("=== Test 2: Owner not inside ===");
isOwnerInside = false;
checkSecurity();

console.log("=== Test 3: Alarm off ===");
isOwnerInside = true;
isAlarmOn = false;
checkSecurity();

console.log("=== Test 4: Window open ===");
isAlarmOn = true;
isWindowClosed = false;
checkSecurity();

console.log("=== Test 5: Door unlocked ===");
isWindowClosed = true;
isDoorLocked = false;
checkSecurity();
