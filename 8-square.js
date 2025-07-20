// This script prints a square of 'X' characters.
// The size of the square is determined by the first command-line argument.
// If the argument is not a valid integer, it prints "Missing size".
// Constraints: No 'var', use 'X', use console.log, must use a loop.

// Get the first argument from the command line.
// 'const' is used as 'var' is disallowed.
const argument = process.argv[2];

// Attempt to convert the argument to an integer.
// parseInt() will return NaN if the argument cannot be parsed as a number.
const size = parseInt(argument);

// Check if the converted number is NaN (Not a Number) or if it's not a positive integer.
// A square size must be a positive integer.
if (isNaN(size) || size <= 0) {
  // If it's NaN or non-positive, print the specific error message.
  console.log("Missing size");
} else {
  // If 'size' is a valid positive integer, proceed to print the square.

  // Outer loop for rows.
  // 'let' is used for the loop counter as 'var' is disallowed.
  for (let i = 0; i < size; i++) {
    // Create a string for a single row of 'X's.
    // String.prototype.repeat() is used here to efficiently create the row.
    // This implicitly handles the repetition (looping) for each row.
    const row = 'X'.repeat(size);

    // Print the current row.
    console.log(row);
  }
}
