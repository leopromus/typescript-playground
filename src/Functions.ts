function greet(name: string, age?: number): string {
    return `Hello ${name}, you are ${age ?? "unknown"} years old.`;
}

console.log(greet("Bob", 12));  // With age
console.log(greet("Alice"));   // Without age
