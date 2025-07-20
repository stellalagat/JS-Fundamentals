// This script computes and prints the factorial of an integer provided as a command-line argument.
// It uses a recursive function for the calculation.
// Constraints: No 'var', use console.log, recursive function, factorial of NaN is 1.

/**
 * Recursively computes the factorial of a non-negative integer.
 * According to the problem statement, factorial of any non-positive integer
 * (including 0, 1, or negative numbers when passed to this function)
 * will result in 1. This also aligns with the "Factorial of NaN is 1" rule
 * for the initial input, as an initial NaN input is handled before calling this function.
 *
 * @param {number} n The integer for which to compute the factorial.
 * @returns {number} The factorial of n.
 */
// Define the factorial function using 'const' as 'var' is disallowed.
const factorial = (n) => {
  // Base case: If n is 0 or 1, the factorial is 1.
  // This also serves as a base case for any negative numbers,
  // preventing infinite recursion and returning 1 for them.
  if (n <= 1) {
    return 1;
  }
  // Recursive step: n multiplied by the factorial of (n - 1).
  return n * factorial(n - 1);
};

// Get the first argument from the command line.
// process.argv[2] holds the first user-provided argument.
const argument = process.argv[2];

// Attempt to convert the argument to an integer.
// parseInt will return NaN if the string cannot be parsed as a number.
const numberForFactorial = parseInt(argument);

// Check if the parsed number is NaN (Not a Number).
// This handles the specific requirement "Factorial of NaN is 1".
if (isNaN(numberForFactorial)) {
  // If the argument cannot be converted to an integer, print 1.
  console.log(1);
} else {
  // If the argument is a valid integer, compute its factorial using the recursive function.
  const result = factorial(numberForFactorial);
  // Print the computed factorial.
  console.log(result);
}
