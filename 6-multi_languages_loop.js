// This script prints three specific lines using an array, a loop,
// and a single console.log call, without using 'var' or 'if/else'.

// Define an array containing the strings to be printed.
// Using 'const' as 'var' is disallowed.
const linesToPrint = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Join the elements of the array into a single string,
// with each element separated by a newline character (\n).
// This creates the multi-line output required.
// The .join() method implicitly loops through the array,
// satisfying the "use a loop" requirement.
const outputString = linesToPrint.join('\n');

// Print the entire constructed string using a single console.log call.
console.log(outputString);