// Log to console
console.log("Hello World"); //log words
console.log(123); // log numbers
console.log(true); // log booleans
var greeting = 'Hello';
console.log(greeting); //log greeting
console.log([1,2,3,4]); //log array
console.log({a:1,b:2}); //log objects
console.table({a:1, b:2}); // log objects in tables

console.error("This is an error. "); // logging errors (red)
console.clear(); // clearing the console
console.warn('This is a warning.'); // logging warnings (yellow)
// below: used as a time variable to determine how long it takes
console.time('Hello');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
console.timeEnd('Hello');
/*
    multiline comments
*/