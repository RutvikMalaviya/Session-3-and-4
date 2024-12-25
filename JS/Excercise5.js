// Function to generate and print Fibonacci series
function printFibonacci() {
    // Get the number of steps from input
    const steps = parseInt(document.getElementById("steps").value);
    const resultDiv = document.getElementById("result");

    // Clear previous results
    resultDiv.innerHTML = "";

    // Validate input
    if (isNaN(steps) || steps <= 0) {
      resultDiv.innerHTML = "Please enter a valid number greater than 0.";
      return;
    }

    // Initialize Fibonacci series
    let fibonacciSeries = [0, 1];

    // Generate Fibonacci series
    for (let i = 2; i < steps; i++) {
      fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }

    // Adjust series length if steps is 1
    if (steps === 1) {
      fibonacciSeries = [0];
    }

    // Display the Fibonacci series
    resultDiv.innerHTML = `Fibonacci Series (${steps} steps): ${fibonacciSeries.join(", ")}`;
  }


