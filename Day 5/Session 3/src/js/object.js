// objects.js

// Object Creation
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  greet: function () {
    return `Hi, I'm ${this.firstName} ${this.lastName}`;
  },
};

console.log(person.greet());

// Adding new properties
person.country = "India";
console.log("Country:", person.country);

// Iterating through object properties
console.log("Iterating with for...in:");
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Using Object.keys()
console.log("Iterating with Object.keys():");
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

// Nested Objects
const student = {
  name: "Sara",
  scores: {
    math: 95,
    english: 88,
  },
};

console.log(`${student.name}'s Math score:`, student.scores.math);
