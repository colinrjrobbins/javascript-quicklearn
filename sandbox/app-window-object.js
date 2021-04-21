// WINDOW METHODS / OBJECT / PROPERTIES

console.log(123);

// Alert
// window.alert("Hello World.")

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure?')){
//     console.log('YES');
// } else {
//     console.log('NO');
// }

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width (does not include scroll bars)
val = window.innerHeight;
val = window.innerWidth;

// Scroll Points // Good for scrolling animations
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // will show the query string for a seach function

// REDIRECTS
// window.location.href = 'http://google.com';

// Reload
// window.location.reload()

// History Object
// window.history.go(-1);

val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);