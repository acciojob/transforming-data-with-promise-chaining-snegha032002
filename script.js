//your JS code here. If required.
// Get DOM elements
const btn = document.getElementById('btn');
const output = document.getElementById('output');
const ip = document.getElementById('ip');

// Function to simulate a delay using setTimeout in a promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to handle transformations
function handleTransformations() {
  // Get the number from the input
  const number = parseFloat(ip.value);

  // Check if the number is valid
  if (isNaN(number)) {
    output.textContent = 'Please enter a valid number.';
    return;
  }

  // Step 1: Initial promise (After 2 seconds)
  new Promise((resolve) => {
    setTimeout(() => {
      output.textContent = `Result: ${number}`;
      resolve(number); // Resolve with the input number
    }, 2000);
  })
  // Step 2: Multiply by 2 (After 2 seconds)
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num * 2;
        output.textContent = `Result: ${result}`;
        resolve(result); // Resolve with the multiplied number
      }, 2000);
    });
  })
  // Step 3: Subtract 3 (After 1 second)
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num - 3;
        output.textContent = `Result: ${result}`;
        resolve(result); // Resolve with the result after subtraction
      }, 1000);
    });
  })
  // Step 4: Divide by 2 (After 1 second)
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num / 2;
        output.textContent = `Result: ${result}`;
        resolve(result); // Resolve with the result after division
      }, 1000);
    });
  })
  // Step 5: Add 10 (After 1 second)
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num + 10;
        output.textContent = `Final Result: ${result}`;
        resolve(result); // Resolve with the final result
      }, 1000);
    });
  });
}

// Event listener for the button
btn.addEventListener('click', handleTransformations);
