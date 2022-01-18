const _msg = "Hello World";

// you can export them as they are defined like this..
// export const HelloWorld1 = () => { console.log(`${_msg} 1`); };
// export const HelloWorld2 = () => { console.log(`${_msg} 2`); };
// export const HelloWorld3 = () => { console.log(`${_msg} 3`); };

// or you can export them all at once as defined like this...
const HelloWorld1 = () => { console.log(`${_msg} 1`); };
const HelloWorld2 = () => { console.log(`${_msg} 2`); };
const HelloWorld3 = () => { console.log(`${_msg} 3`); };

export { HelloWorld1, HelloWorld2, HelloWorld3 };

// I can also use aliases...
// export { HelloWorld1, HelloWorld2, HelloWorld3 as HW3};

// the import site will look like...
// import {HelloWorld1, HelloWorld2, HW3} from 'Greetings.js';