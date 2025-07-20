// This script demonstrates how to access and print the first command-line argument
// in a Node.js environment, without using 'var' or 'length'.

// process.argv is an array containing the command-line arguments.
// process.argv[0] is 'node' (the executable).
// process.argv[1] is the path to the script file.
// process.argv[2] is the first actual argument passed by the user.

// Check if the third element (which would be the first user-provided argument)
// is defined. If it's undefined, it means no argument was provided.
if (typeof process.argv[2] === 'undefined') {
  // If no argument is present at index 2, print "No argument".
  console.log("No argument");
} else {
  // If an argument is present at index 2, print that argument.
  console.log(process.argv[2]);
}