// TEMPLATE LITERALS
const firstName = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Toronto';
let html;

// without template strings (ES5)
html = '<ul><li>Name: '+ firstName+'</li><li>Age: ' + age+'</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>'+
        '<li>Name: '+ firstName+'</li>'+
        '<li>Age: ' + age+'</li>'+
        '<li>Job: ' + job + '</li>'+
        '<li>City: ' + city + '</li>'+
        '</ul>';

function hello(){
    return 'hello';
}

// with template strings/literals (ES6)
html = `
    <ul>
        <li>Name: ${firstName}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age>30 ? 'Over 30' : 'Under 30'}</li>
    </ul>`;

document.body.innerHTML = html;