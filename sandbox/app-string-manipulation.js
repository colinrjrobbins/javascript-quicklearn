const firstName = 'John';
const lastName = 'Doe';
const age = 35;
const str = ' Hello there, my name is ' + firstName;

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Colin ';
val += 'Robbins';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Treat string like an array
val = firstName[0];

// IndexOf()
val = firstName.indexOf('o');
val = firstName.lastIndexOf('o');

// charAt()
val = firstName.charAt('2');
// get last character
val = firstName.charAt(firstName.length - 1);

// Substrings()
val = firstName.substring(0,2);

// slice()
val = firstName.slice(0,3);
val = firstName.slice(-3);

// split()
val = str.split(' ');

// replace()
val = str.replace(firstName, 'Colin');

// includes()
val = str.includes(firstName); // true
val = str.includes('test'); //false

console.log(val);