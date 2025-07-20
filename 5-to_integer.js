// This script checks if the first command-line argument can be converted to an integer.
// It uses parseInt() for conversion and isNaN() to validate the result,
// without using 'var' or 'try/catch'.

// process.argv is an array containing the command-line arguments.
// process.argv[0] is 'node' (the executable).
// process.argv[1] is the path to the script file.
// process.argv[2] is the first user-provided argument.

// Get the first argument passed to the script.
// We use 'const' as 'var' is not allowed.
const firstArgument = process.argv[2];

// Attempt to convert the argument to an integer.
// parseInt will parse a string argument and return an integer.
// If the first character cannot be converted to a number, it returns NaN (Not a Number).
const convertedNumber = parseInt(firstArgument);

// Check if the result of parseInt() is NaN.
// isNaN() is a global function that determines whether a value is an illegal number (Not-a-Number).
if (isNaN(convertedNumber)) {
  // If convertedNumber is NaN, it means the argument could not be reliably converted to an integer.
  console.log("Not a number");
} else {
  // If convertedNumber is not NaN, it means a valid integer was parsed.
  console.log(`My number: ${convertedNumber}`);
}
