"use strict";
function greet(name, age) {
    return `Hello ${name}, you are ${age !== null && age !== void 0 ? age : "unknown"} years old.`;
}
console.log(greet("Bob", 12)); // With age
console.log(greet("Alice")); // Without age
