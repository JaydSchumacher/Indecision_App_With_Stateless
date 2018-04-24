//import './utils.js';
// import subtract, { square, add } from './utils.js';

// console.log('app.js is running');
// console.log(square(8));
// console.log(add(5,2));
// console.log(subtract(100, 81));

import isSenior, { isAdult, canDrink } from './person.js'

const age = 65;

console.log(isAdult(age));
console.log(canDrink(age));
console.log(isSenior(age));