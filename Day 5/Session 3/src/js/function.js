// functions.js

// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Function Expression
const add = function (a, b) {
  return a + b;
};
console.log("Sum:", add(5, 10));

// Arrow Function
const multiply = (x, y) => x * y;
console.log("Product:", multiply(4, 6));

// Default Parameters
function introduce(name = "Guest") {
  console.log(`Welcome, ${name}`);
}
introduce();
introduce("Bob");

function ScopeExample() {
  if (true) {
    let blockScoped = "I am block scoped";
    var functionScoped = "I am function scoped";
    console.log(blockScoped); // Accessible here
  }

  console.log(functionScoped); // Accessible here
  //   console.log(blockScoped); // Error: blockScoped is not defined
}

ScopeExample();
