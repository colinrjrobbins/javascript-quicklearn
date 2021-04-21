// var, let, const
// var is depreciated/weak, use let or const

var name = 'John Doe'; // simple variable creation
console.log(name);
name = 'Steve Smith';
console.log(name);

// initialize var
var greeting;
console.log(greeting);
greeting = 'hello';
console.log(greeting);

// variables can include: letters, numbers, _, $
// cannot start with a number

// multiword variables
var firstName = 'John'; // camel case - GENERAL CONVENTION
var first_name = 'Sarah'; // snake case
var FirstName = 'Tom'; // Pascal Case - CLASS CREATION

// LET - works the same as var
let letname = 'John Doe';
console.log(letname);
name = 'Steve Smith';
console.log(letname);

// CONST - cannot be changed
const constname = 'John';
console.log(constname);
//constname = 'Sara'
// cannot initialize constant without variable
//const greeting;

const person = {
    name: 'John',
    age: 30
}

console.log(person);

person.name = "Banana"
person.age = 32;

console.table(person);

const numbers = [1,2,3,4,5]

console.log(numbers)

numbers.push(6);

console.log(numbers);