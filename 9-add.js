// This script defines a function to add two numbers and then
// uses it to sum two integers provided as command-line arguments.
// Constraints: No 'var', use console.log, define function add(a, b).

/**
 * Adds two numbers together.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
// Define the add function using 'const' as 'var' is disallowed.
const add = (a, b) => {
  return a + b;
};

// Get the first argument from the command line.
// process.argv[2] holds the first user-provided argument.
const firstArgument = process.argv[2];

// Get the second argument from the command line.
// process.argv[3] holds the second user-provided argument.
const secondArgument = process.argv[3];

// Convert the arguments to integers.
// parseInt() is used to ensure they are treated as numbers for addition.
const num1 = parseInt(firstArgument);
const num2 = parseInt(secondArgument);

// Call the add function with the converted integers and print the result.
console.log(add(num1, num2));
