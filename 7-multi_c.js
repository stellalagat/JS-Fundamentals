// This script prints "C is fun" a specified number of times (x),
// where x is the first command-line argument.
// It handles cases where x is not a valid integer.
// Constraints: No 'var', only two 'console.log' calls, must use a loop.

// Get the first argument from the command line.
// 'const' is used as 'var' is disallowed.
const argument = process.argv[2];

// Attempt to convert the argument to an integer.
// parseInt() will return NaN if the argument cannot be parsed as a number.
const numberOfOccurrences = parseInt(argument);

// Check if the converted number is NaN (Not a Number).
// This determines if the first argument was a valid integer.
if (isNaN(numberOfOccurrences)) {
  // If it's NaN, print the specific error message.
  // This is the first allowed console.log call.
  console.log("Missing number of occurrences");
} else {
  // If it's a valid number, proceed to print "C is fun" x times.

  // Initialize an empty string to build the output.
  // We will append "C is fun" and newlines to this string.
  let outputString = "";

  // Use a for loop to iterate 'numberOfOccurrences' times.
  // The loop will not execute if numberOfOccurrences is 0 or negative,
  // resulting in an empty outputString, which is correct for 0 occurrences.
  for (let i = 0; i < numberOfOccurrences; i++) {
    // Append "C is fun" to the output string.
    outputString += "C is fun";
    // Add a newline character after each "C is fun",
    // except for the very last one to avoid an trailing newline.
    if (i < numberOfOccurrences - 1) {
      outputString += "\n";
    }
  }

  // Print the entire constructed string.
  // This is the second and final allowed console.log call.
  console.log(outputString);
}
