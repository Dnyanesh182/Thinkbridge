console.log("=== JavaScript Basics Exercises ===\n");

// VARIABLES AND TYPES EXERCISES

console.log("1. VARIABLES AND TYPES");
console.log("====================");

// Exercise 1: Variable Declaration
console.log("\n--- Exercise 1: Variable Declaration ---");
let studentName = "Dnyaneshwar Potdar";
const birthYear = 1995;
let isEnrolled = true;
let grade;
let previousSchool = null;
console.log("Student Name:", studentName);
console.log("Birth Year:", birthYear);
console.log("Is Enrolled:", isEnrolled);
console.log("Grade:", grade);
console.log("Previous School:", previousSchool);

// Exercise 2: Type Checking
console.log("\n--- Exercise 2: Type Checking ---");
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

// Exercise 3: Variable Reassignment
console.log("\n--- Exercise 3: Variable Reassignment ---");
let counter = 0;
console.log("Initial counter:", counter);
counter = 10;
console.log("After reassignment:", counter);
const PI = 3.14159;
console.log("PI constant:", PI);

// STRING EXERCISES

console.log("\n\n2. STRINGS");
console.log("===========");

// Exercise 4: String Manipulation
console.log("\n--- Exercise 4: String Manipulation ---");
const fullName = "Dnyaneshwar Dhananjay Potdar";
const firstName = fullName.slice(0, fullName.indexOf(" "));
const lastName = fullName.slice(fullName.lastIndexOf(" ") + 1);
const initials = firstName.charAt(0) + lastName.charAt(0);
console.log("Full Name:", fullName);
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Initials:", initials);
console.log("Name Length:", fullName.length);

// Exercise 5: String Formatting
console.log("\n--- Exercise 5: String Formatting ---");
const product = "Laptop";
const price = 999.99;
const discount = 0.15;
const discountedPrice = price * (1 - discount);
const message = `Special Offer: ${product} - Original Price: $${price.toFixed(
  2
)},
Discounted Price: $${discountedPrice.toFixed(2)} (${discount * 100}% off!)`;
console.log(message);

// Exercise 6: String Validation
console.log("\n--- Exercise 6: String Validation ---");
const emails = [
  "user@example.com",
  "invalid-email",
  "test@domain.org",
  "no-at-symbol",
];
function basicEmailValidation(email) {
  return email.includes("@") && email.includes(".") && email.indexOf("@") > 0;
}
emails.forEach((email) => {
  const isValid = basicEmailValidation(email);
  console.log(`${email}: ${isValid ? "Valid" : "Invalid"}`);
});

// ARRAY EXERCISES

console.log("\n\n3. ARRAYS");
console.log("==========");

// Exercise 7: Array Operations
console.log("\n--- Exercise 7: Array Operations ---");
let fruits = ["apple", "banana", "orange"];
console.log("Initial array:", fruits);
fruits.push("grape");
console.log("After push:", fruits);
fruits.unshift("mango");
console.log("After unshift:", fruits);
const lastFruit = fruits.pop();
console.log("Removed fruit:", lastFruit);
console.log("After pop:", fruits);
const firstFruit = fruits.shift();
console.log("Removed first:", firstFruit);
console.log("After shift:", fruits);

// Exercise 8: Array Search
console.log("\n--- Exercise 8: Array Search ---");
const numbers = [10, 25, 30, 45, 60, 75, 90];
function findNumber(arr, target) {
  const index = arr.indexOf(target);
  return index !== -1
    ? `Found ${target} at index ${index}`
    : `${target} not found`;
}
console.log("Numbers array:", numbers);
console.log(findNumber(numbers, 45));
console.log(findNumber(numbers, 100));
console.log("Includes 30:", numbers.includes(30));
console.log("Includes 15:", numbers.includes(15));

// Exercise 9: Array Transformation
console.log("\n--- Exercise 9: Array Transformation ---");
const colors = ["red", "green", "blue", "yellow"];
console.log("Original array:", colors);
const colorString = colors.join(", ");
console.log("Joined string:", colorString);
const backToArray = colorString.split(", ");
console.log("Back to array:", backToArray);
const upperColors = colors.map((color) => color.toUpperCase());
console.log("Uppercase colors:", upperColors);

// CONDITIONAL EXERCISES

console.log("\n\n4. CONDITIONALS");
console.log("================");

// Exercise 10: Grade Calculator
console.log("\n--- Exercise 10: Grade Calculator ---");
function calculateGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
const testScores = [95, 87, 76, 64, 52, 100, 83];
testScores.forEach((score) => {
  console.log(`Score: ${score} - Grade: ${calculateGrade(score)}`);
});

// Exercise 11: Age Categorization
console.log("\n--- Exercise 11: Age Categorization ---");
function categorizeAge(age) {
  if (age < 13) return "Child";
  if (age < 20) return "Teenager";
  if (age < 60) return "Adult";
  return "Senior";
}
const ages = [8, 16, 25, 45, 67, 12, 19, 65];
ages.forEach((age) => {
  console.log(`Age: ${age} - Category: ${categorizeAge(age)}`);
});

// Exercise 12: Login Validation
console.log("\n--- Exercise 12: Login Validation ---");
function validateLogin(username, password) {
  const validUsername = "admin";
  const validPassword = "password123";
  if (username === validUsername && password === validPassword)
    return "Login successful!";
  if (username !== validUsername) return "Invalid username";
  return "Invalid password";
}
const loginAttempts = [
  ["admin", "password123"],
  ["user", "password123"],
  ["admin", "wrongpass"],
  ["guest", "guest123"],
];
loginAttempts.forEach(([username, password]) => {
  console.log(
    `Login attempt: ${username}/${password} - ${validateLogin(
      username,
      password
    )}`
  );
});

// LOOP EXERCISES

console.log("\n\n5. LOOPS");
console.log("=========");

// Exercise 13: Number Patterns
console.log("\n--- Exercise 13: Number Patterns ---");
console.log("Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) process.stdout.write(i + " ");
console.log();
console.log("Even numbers 2 to 20:");
for (let i = 2; i <= 20; i += 2) process.stdout.write(i + " ");
console.log();
console.log("Countdown from 10 to 1:");
for (let i = 10; i >= 1; i--) process.stdout.write(i + " ");
console.log();

// Exercise 14: Array Processing
console.log("\n--- Exercise 14: Array Processing ---");
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
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);

// Exercise 15: Multiplication Table
console.log("\n--- Exercise 15: Multiplication Table ---");
function createMultiplicationTable(number, limit = 10) {
  console.log(`Multiplication table for ${number}:`);
  for (let i = 1; i <= limit; i++)
    console.log(`${number} x ${i} = ${number * i}`);
}
createMultiplicationTable(7, 5);
