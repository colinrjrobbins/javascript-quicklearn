// PRIMATIVE
// located on the variable, stored on the stack

// REFERENCE
// accessed by eference
// objects are stored on the heap
// a pointer to a location in memory

// Data Types
// Strings
// Number - integers, decimal, float, all number
// Boolean - true/false
// Null
// Undefined - unassigned variable
// Symbols (ES6)

// Reference Types / Objects
// Arrays
// Object Literals
// Functions
// Dates

// JavaScript = Dynamically Typed Language
// Types are asociated with values not variables
// The same variable can hold multiple types
// We do not need to specify types
// Most other languages are statically typed (Java, C#, C++)
// Supersets of JS and addons to allow static typing (TypeScript, Flow)

// PRIMATIVE
//string
const fullName = 'John Doe';
console.log(fullName);
console.log(typeof fullName);

// number
const age = 45;
console.log(age);
console.log(typeof age);

// boolean
const hasKids = true;
console.log(hasKids);
console.log(typeof hasKids);

// null
const car = null;

console.log(car);
console.log(typeof car);

// undefined
let banana;

console.log(banana);
console.log(typeof banana);

// symobol
const sym = Symbol();

console.log(sym);
console.log(typeof sym);

// REFERENCE
// array
const hobbies = ['movies','music','dancing'];
console.log(hobbies);
console.log(typeof hobbies);

// object literal
const address = {
    city: 'Boston',
    state:'MA'
}
console.log(address);
console.log(typeof address);

const today = new Date();
console.log(today);