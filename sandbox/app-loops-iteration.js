// LOOPS AND ITERATION
// FOR LOOP

for(let i = 0; i < 10; i++){
    if(i === 3){
        console.log('3 is my fav.');
        continue;   // stop the loop here and continue to the next iteration
    }
    if(i === 5){
        console.log('No 5.')
        break;
    }
    console.log(`Hello ${i}`);
}

// WHILE LOOP
let i = 0;
while(i!= 5){
    console.log('Magic #' + (i+1))
    i++;
}

// DO WHILE
let x = 0;
do{
    console.log('Magic Do #' + (x+1))
    x++;
}while(x!=5)

// LOOPING THROUGH ARRAYS
const cars = ['Ford','Mazda','Totota', 'Subaru'];
for(let p = 0; p < cars.length; p++){
    console.log(cars[p]);
}

// FOR EACH LOOP
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array)
});

// MAP
const users = [
    {id:1, name:'John'},
    {id:2, name:'Colin'},
    {id:3, name:'Ashley'}
];

const ids = users.map(function(user){
    return user.id;
})

console.log(ids);


const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let y in user){
    console.log(`${y} : ${user[y]}`);
}