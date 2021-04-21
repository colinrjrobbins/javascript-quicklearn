// ARRAYS and ARRAY METHODS
// create some arrays
const numbers = [43,56,33,23,53,67,4];
const numbers2 = new Array(22,34,53,2,456,3);
const fruit = ['Apple','Banana','Orange','Potato'];
const mixed = [22, 'hello', true, undefined, null, {a:12, b:13}, new Date()];

let val;

// Get array length
val = numbers.length;

// check if is array
val = Array.isArray(numbers);

// get single value
val = numbers[4];

// insert into array
numbers[2] = 100

// find index of value
val = numbers.indexOf(23)

// MUTATE ARRAYS
// add onto the end of the array
numbers.push(250);

// add onto front
numbers.unshift(12);

// take off from end
numbers.pop();

// take off from the start
numbers.shift();

// splice values
numbers.splice(1,1); // (start, end)

// reverse array
numbers.reverse();

// CONCATTONATE ARRAY
val = numbers.concat(numbers2);

// SORT ARRAY
val = fruit.sort();
val = numbers.sort();

// use the "compare function"
val = numbers.sort(function(a,b){
    return a - b;
})

// reverse sort
val = numbers.sort(function(x,y){
    return y -x;
})

// find
function under50(num){
    return num < 50;
}

// over 50
function over50(num){
    return num > 50;
}

val = numbers.find(under50);
val = numbers.find(over50);

console.log(numbers);
console.log(val);