// This script demonstrates how to access and print two command-line arguments
// in a Node.js environment, formatted as "arg1 is arg2", without using 'var'.

// process.argv is an array containing the command-line arguments.
// process.argv[0] is 'node' (the executable).
// process.argv[1] is the path to the script file.
// process.argv[2] is the first user-provided argument.
// process.argv[3] is the second user-provided argument.

// Retrieve the first argument from the command line.
// Using 'const' as 'var' is disallowed.
const firstArgument = process.argv[2];

// Retrieve the second argument from the command line.
const secondArgument = process.argv[3];

// Print the arguments in the specified format using a template literal.
// This is a concise way to embed variables directly into a string.
console.log(`${firstArgument} is ${secondArgument}`);
