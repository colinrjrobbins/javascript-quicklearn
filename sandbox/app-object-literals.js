// OBJECT LITERALS
const person = {
    firstName: 'Colin',
    lastName: 'Robbins',
    age: 23,
    email: 'colinrjrobbins@gmail.com',
    hobbies: ['music','speakers','electonics'],
    address:{
        city: 'Stouffville',
        province: 'Ontario'
    },
    getBirthYear: function(){
        return 2021 - this.age-1;
    }
}

let val;

val = person;
// get specific value
val = person.firstName;
val = person['firstName'];

val = person.age;
val = person.hobbies[2];
val = person.address.city;
val = person.address['city'];
val = person.getBirthYear();

const people = [
    {name:'Ashley',age:24},
    {name:'Banana',age:0.12}
]

for (let i = 0; i<people.length;i++){
    console.table(people[i]);
}

console.log(val);