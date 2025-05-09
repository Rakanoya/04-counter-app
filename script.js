// Select the count display and the "Enter" button
const countDisplay = document.getElementById("count"); // Using const because these elements won't change
const increaseButton = document.getElementById("increase"); // Using const for the same reason
const decreaseButton = document.getElementById("decrease"); // Using const because this element won't change
const resetButton = document.getElementById("reset"); // Using const because this element won't change

// Initialize the count variable
let count = 0;

// Add an event listener to the "Enter" button
increaseButton.addEventListener("click", function () {
  count = count + 1; // Increase the count by 1
  countDisplay.textContent = count; // Update the count display
});

// Add an event listener to the "Exit" button
decreaseButton.addEventListener("click", function () {
  if (count > 0) { // Check if the count is greater than 0
    count = count - 1; // Decrease the count by 1
    countDisplay.textContent = count; // Update the count display
  }
});

// Add an event listener to the "Reset" button
resetButton.addEventListener("click", function () {
  count = 0; // Reset the count to 0
  countDisplay.textContent = count; // Update the count display
});
