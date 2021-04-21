// IF STATEMENTS AND COMPARISONS
// if(something){
//     do something;
// }else{
//     do something else;
// }

let id = 100;

// EQUAL TO
if(id == 100){
    console.log("CORRECT");
} else{
    console.log("INCORRECT");
}

// NOT EQUAL TO
if (id != 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// TYPE CHECKING
// Using 3 equal signs
const id2 = '100';

if (id2 === 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

if (id2 !== 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

id = undefined;

// Test if undefined
if(typeof id !== 'undefined'){
    console.log(`The ID is ${id}.`)
} else {
    console.log(`No ID.`)
}

id = 300;
console.log(`ID = ${id}`)
// GREATER OR LESS THAN
if (id >= 200){
    console.log('Greater then 200')
} else {
    console.log('Less then 200')
}

const color = 'yellow';

// ELSE IF
if(color === 'yellow'){
    console.log(`The color is ${color}.`);
} else if (color === 'blue'){
    console.log(`The color is blue.`);
} else {
    console.log('Color is not yellow or blue.')
}

// LOGICAL OPERATORS
const firstName = 'Colin'
const age = 23;

// AND &&
if (age > 0 && age <= 12){
    console.log(`${firstName} is a child.`);
} else if (age >= 13 && age <= 19){
    console.log(`${firstName} is a teenager.`)
} else {
    console.log(`${firstName} is an adult.`)
}

// OR ||
if(age < 16 || age > 65){
    console.log(`${firstName} has a mush brain.`)
} else{
    console.log(`Your aight.`)
}

id = 100;

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');