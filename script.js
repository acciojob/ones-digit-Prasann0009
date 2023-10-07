function onesDigit(n) {
  // Check if the input is a positive integer
  if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
    throw new Error('Input must be a positive integer');
  }

  // Get the ones digit by taking the modulo 10 of the number
  const ones = n % 10;

  return ones;
}

// Prompt the user to enter a number
const userInput = prompt("Enter Number:");

try {
  // Parse the user input as an integer and call the onesDigit function
  const number = parseInt(userInput, 10);
  if (!isNaN(number)) {
    alert(onesDigit(number)); // Display the ones digit
  } else {
    alert("Invalid input. Please enter a positive integer.");
  }
} catch (error) {
  alert(error.message);
}

