// FUNCTION DECLARATIONS

function greet(firstName='John', lastName='Doe'){
    // before es6
    if (typeof firstName === 'undefined'){firstName = 'John'}
    if (typeof lastName === 'undefined'){lastName = 'Doe'}
    // es6 you can define in the function 
    //console.log('Hello');
    return `Hello ${firstName} ` + lastName;
}

let val = greet('Colin', 'Robbins');
console.log(val);
val = greet();
console.log(val);

// FUNCTION EXPRESSIONS
const square = function(x){
    return x*x;
}

console.log(square(8));

// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFEs
// function that is decalred and run at the same time

(function(){
    console.log('IIFE Ran...');
})();

(function(firstName){
    console.log(`Hello ${firstName}`);
})('Brad');

// PROPERTY METHODS
const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();