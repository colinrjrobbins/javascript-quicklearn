// GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

// FUNCTION SCOPE
function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);
}

// BLOCK SCOPE
if(true){
    var a = 7;
    let b = 8;
    const c = 9;
    console.log('Block Scope: ', a, b, c);
}

// LOOP SCOPE
for(var a = 0; a < 10; a++){
    console.log(`Loop:${a}`);
}

console.log('Global Scope: ', a, b, c);
test()