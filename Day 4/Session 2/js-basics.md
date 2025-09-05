# JavaScript Basics - Complete Basics with Exercises

## Table of Contents

1. [Variables and Types](#variables-and-types)
2. [Strings](#strings)
3. [Arrays](#arrays)
4. [Conditionals](#conditionals)
5. [Loops](#loops)

---

## Variables and Types

### Exercise 1: Variable Declaration

Learn about different ways to declare variables and their characteristics.

```javascript
// Variable Declaration
let studentName = "Dnyaneshwar Potdar"; // mutable variable
const birthYear = 1995; // immutable constant
let isEnrolled = true; // boolean
let grade; // undefined
let previousSchool = null; // explicitly null

console.log("Student Name:", studentName);
console.log("Birth Year:", birthYear);
console.log("Is Enrolled:", isEnrolled);
console.log("Grade:", grade);
console.log("Previous School:", previousSchool);
```

**Key Concepts:**

- `let` - for variables that can be reassigned
- `const` - for constants that cannot be reassigned
- `undefined` - variable declared but not assigned
- `null` - explicitly empty value

### Exercise 2: Type Checking

JavaScript has several primitive types. Use `typeof` to check variable types.

```javascript
// Type Checking
const variables = [studentName, birthYear, isEnrolled, grade, previousSchool];
const variableNames = [
  "studentName",
  "birthYear",
  "isEnrolled",
  "grade",
  "previousSchool",
];

for (let i = 0; i < variables.length; i++) {
  console.log(`${variableNames[i]}: ${typeof variables[i]}`);
}
```

**Output:**

```
studentName: string
birthYear: number
isEnrolled: boolean
grade: undefined
previousSchool: object  // null is typeof object in JavaScript
```

### Exercise 3: Variable Reassignment

```javascript
// Variable Reassignment
let counter = 0;
console.log("Initial counter:", counter);

counter = 10; // This works with 'let'
console.log("After reassignment:", counter);

const PI = 3.14159;
console.log("PI constant:", PI);
// PI = 3.14; // This would cause an error - constants cannot be reassigned
```

---

## Strings

### Exercise 4: String Manipulation

Master common string operations and methods.

```javascript
// String Manipulation
const fullName = "Dnyaneshwar Dhananjay Potdar";
const firstName = fullName.slice(0, fullName.indexOf(" "));
const lastName = fullName.slice(fullName.lastIndexOf(" ") + 1);
const initials = firstName.charAt(0) + lastName.charAt(0);

console.log("Full Name:", fullName);
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Initials:", initials);
console.log("Name Length:", fullName.length);
```

**Key Methods:**

- `slice(start, end)` - extracts a section of string
- `indexOf(substring)` - finds first occurrence
- `lastIndexOf(substring)` - finds last occurrence
- `charAt(index)` - gets character at position

### Exercise 5: String Formatting

Use template literals for dynamic string creation.

```javascript
// String Formatting with Template Literals
const product = "Laptop";
const price = 999.99;
const discount = 0.15;

const discountedPrice = price * (1 - discount);
const message = `Special Offer: ${product} - Original Price: $${price.toFixed(
  2
)}, 
Discounted Price: $${discountedPrice.toFixed(2)} (${discount * 100}% off!)`;

console.log(message);
```

**Template Literal Features:**

- Use backticks (\`) instead of quotes
- `${expression}` for variable interpolation
- Multi-line strings supported
- `toFixed(digits)` for decimal formatting

### Exercise 6: String Validation

Create a basic email validation function.

```javascript
// Basic Email Validation
function basicEmailValidation(email) {
  return email.includes("@") && email.includes(".") && email.indexOf("@") > 0;
}

const emails = [
  "user@example.com", // Valid
  "invalid-email", // Invalid
  "test@domain.org", // Valid
  "no-at-symbol", // Invalid
];

emails.forEach((email) => {
  const isValid = basicEmailValidation(email);
  console.log(`${email}: ${isValid ? "Valid" : "Invalid"}`);
});
```

---

## Arrays

### Exercise 7: Array Operations

Learn essential array manipulation methods.

```javascript
// Array Operations
let fruits = ["apple", "banana", "orange"];
console.log("Initial array:", fruits);

// Add to end
fruits.push("grape");
console.log("After push:", fruits); // ["apple", "banana", "orange", "grape"]

// Add to beginning
fruits.unshift("mango");
console.log("After unshift:", fruits); // ["mango", "apple", "banana", "orange", "grape"]

// Remove from end
const lastFruit = fruits.pop();
console.log("Removed fruit:", lastFruit); // "grape"
console.log("After pop:", fruits);

// Remove from beginning
const firstFruit = fruits.shift();
console.log("Removed first:", firstFruit); // "mango"
console.log("After shift:", fruits);
```

**Array Methods Summary:**

- `push()` - adds to end, returns new length
- `pop()` - removes from end, returns removed element
- `unshift()` - adds to beginning, returns new length
- `shift()` - removes from beginning, returns removed element

### Exercise 8: Array Search

Find elements and check for existence.

```javascript
// Array Search Methods
const numbers = [10, 25, 30, 45, 60, 75, 90];

function findNumber(arr, target) {
  const index = arr.indexOf(target);
  return index !== -1
    ? `Found ${target} at index ${index}`
    : `${target} not found`;
}

console.log("Numbers array:", numbers);
console.log(findNumber(numbers, 45)); // Found 45 at index 3
console.log(findNumber(numbers, 100)); // 100 not found
console.log("Includes 30:", numbers.includes(30)); // true
console.log("Includes 15:", numbers.includes(15)); // false
```

### Exercise 9: Array Transformation

Convert arrays to strings and back, plus transformations.

```javascript
// Array Transformation
const colors = ["red", "green", "blue", "yellow"];
console.log("Original array:", colors);

// Array to string
const colorString = colors.join(", ");
console.log("Joined string:", colorString); // "red, green, blue, yellow"

// String back to array
const backToArray = colorString.split(", ");
console.log("Back to array:", backToArray);

// Transform each element
const upperColors = colors.map((color) => color.toUpperCase());
console.log("Uppercase colors:", upperColors); // ["RED", "GREEN", "BLUE", "YELLOW"]
```

---

## Conditionals

### Exercise 10: Grade Calculator

Use if-else statements to categorize grades.

```javascript
// Grade Calculator Function
function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const testScores = [95, 87, 76, 64, 52, 100, 83];
testScores.forEach((score) => {
  console.log(`Score: ${score} - Grade: ${calculateGrade(score)}`);
});
```

**Output:**

```
Score: 95 - Grade: A
Score: 87 - Grade: B
Score: 76 - Grade: C
Score: 64 - Grade: D
Score: 52 - Grade: F
```

### Exercise 11: Age Categorization

Categorize people by age ranges.

```javascript
// Age Categorization
function categorizeAge(age) {
  if (age < 13) {
    return "Child";
  } else if (age < 20) {
    return "Teenager";
  } else if (age < 60) {
    return "Adult";
  } else {
    return "Senior";
  }
}

const ages = [8, 16, 25, 45, 67, 12, 19, 65];
ages.forEach((age) => {
  console.log(`Age: ${age} - Category: ${categorizeAge(age)}`);
});
```

### Exercise 12: Login Validation

Validate user credentials with multiple conditions.

```javascript
// Login Validation
function validateLogin(username, password) {
  const validUsername = "admin";
  const validPassword = "password123";

  if (username === validUsername && password === validPassword) {
    return "Login successful!";
  } else if (username !== validUsername) {
    return "Invalid username";
  } else {
    return "Invalid password";
  }
}

const loginAttempts = [
  ["admin", "password123"], // Success
  ["user", "password123"], // Invalid username
  ["admin", "wrongpass"], // Invalid password
  ["guest", "guest123"], // Invalid username
];

loginAttempts.forEach(([username, password]) => {
  console.log(
    `Login attempt: ${username}/${password} - ${validateLogin(
      username,
      password
    )}`
  );
});
```

---

## Loops

### Exercise 13: Number Patterns

Generate different number sequences using loops.

```javascript
// Number Patterns with For Loops

// Pattern 1: Numbers 1 to 10
console.log("Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) {
  process.stdout.write(i + " "); // 1 2 3 4 5 6 7 8 9 10
}
console.log();

// Pattern 2: Even numbers from 2 to 20
console.log("Even numbers 2 to 20:");
for (let i = 2; i <= 20; i += 2) {
  process.stdout.write(i + " "); // 2 4 6 8 10 12 14 16 18 20
}
console.log();

// Pattern 3: Countdown from 10 to 1
console.log("Countdown from 10 to 1:");
for (let i = 10; i >= 1; i--) {
  process.stdout.write(i + " "); // 10 9 8 7 6 5 4 3 2 1
}
console.log();
```

### Exercise 14: Array Processing

Process arrays to find statistics using for...of loops.

```javascript
// Array Processing with For...Of
const studentScores = [85, 92, 78, 96, 88, 77, 94];
let sum = 0;
let highest = studentScores[0];
let lowest = studentScores[0];

console.log("Processing scores:", studentScores);

for (const score of studentScores) {
  sum += score;
  if (score > highest) highest = score;
  if (score < lowest) lowest = score;
}

const average = sum / studentScores.length;
console.log(`Average: ${average.toFixed(2)}`); // Average: 87.14
console.log(`Highest: ${highest}`); // Highest: 96
console.log(`Lowest: ${lowest}`); // Lowest: 77
```

### Exercise 15: Multiplication Table

Generate multiplication tables with nested logic.

```javascript
// Multiplication Table Generator
function createMultiplicationTable(number, limit = 10) {
  console.log(`Multiplication table for ${number}:`);
  for (let i = 1; i <= limit; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

createMultiplicationTable(7, 5);
```

**Output:**

```
Multiplication table for 7:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
```
