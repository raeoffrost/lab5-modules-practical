import { toUpper } from './stringModule.js';
import { findMax } from './arrayModule.js';
// Addition function
export function add(x, y)
{
    const z = x + y;
    return z;
}
// Subtraction Function
export function subtract(x, y)
{
    const z = x - y;
    return z;
}
// Default Function
export default function multiply(x, y)
{
    const z = x * y;
    return z;
}
// Add and uppercase function
export function addAndToUpper(x, y)
{
    const z = add(x, y);
    console.log(toUpper( "add and make upercase:"+ z.toString()));
}

// Multiply max value and print Upper
export function maxMultiplyUpper(array, input)
{
    let x = findMax(array);
    let z = multiply(x, input);
    const result = toUpper("your answer is: "+ z.toString() + " yay!");
    console.log(result);
    document.getElementById("result").innerHTML = result;
}