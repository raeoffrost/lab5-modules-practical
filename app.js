// importing Local modules
import multiply, { add, subtract, addAndToUpper, maxMultiplyUpper } from './mathModule.js';
import { toUpper, toLower } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

// Testing math functions
console.log("Add:", add(25, 5));
console.log("Subtract: ", subtract(25, 5));
console.log('Multiply: ', multiply(5, 5));
addAndToUpper(10, 20);


// Testing String Functions
console.log("Uppercase:", toUpper("be loud!"));
console.log("Lowercase: ", toLower("BE QUIET."));

// Testing Array modules
console.log('Max: ', findMax([1, 2, 3, 4, 5]));
console.log('Reversed: ', reverseArray([1, 2, 3]));

// Set 8
document.getElementById("submitStep8").addEventListener("click", runStep8);
function runStep8() {
    let input = document.getElementById("inputStep8").value;
    maxMultiplyUpper([ 1, 2, 3, 4, 10], input);
}
