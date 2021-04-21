// DATE and TIME
let val;

const today = new Date();
let birthday = new Date('10-01-1997');

val = today;

//convert to string
val = today.toString();

birthday = new Date('October 01 1997')
birthday = new Date('10/01/1997');

val = birthday;

val = today.getMonth(); //0 = january, 11 = december
val = today.getDate();
val = today.getDay(); // sunday - saturday, sunday = 0
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getHours() +':'+ today.getMinutes() +':'+ today.getSeconds();

birthday.setMonth(9);
birthday.setDate(1);
birthday.setFullYear(1997);

val = birthday;

console.log(typeof val);
console.log(val);