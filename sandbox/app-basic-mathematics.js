const num1 = 100;
const num2 = 50;
let val;

// simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// math object
// rounding, power, generate random numbers, etc.
val = Math.PI; // pi
val = Math.E; // eulers number
val = Math.round(2.8); // auto round
val = Math.ceil(2.4); // round up
val = Math.floor(2.4); // round down
val = Math.sqrt(64); // square root
val = Math.abs(-3); // absolute number
val = Math.pow(8, 2); // 8 to the power of 2
val = Math.min(2,33,4,1,55,6,-3); // returns the minimum
val = Math.max(2,33,4,1,55,6,-3); // returns maximum
val = Math.random(); // returns random decimal between 0 and 1

val = Math.random() * 20 + 1; // number with decimal between 0 and 20
val = Math.floor(Math.random() * 20 + 1); // whole number between 0 and 20

console.log(val);