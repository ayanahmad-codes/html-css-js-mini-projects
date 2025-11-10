// 🧮 Mini Interactive Calculator

// Ask for two numbers
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

// Ask user to choose an operation
let operation = prompt(
  "Choose an operation (+, -, *, /, ^, sqrt):\n(^ = power, sqrt = square root)"
);

// Confirm before doing the operation
let confirmCalc = confirm("Do you want to perform the calculation?");

if (confirmCalc) {
  let result;

  // Perform the operation
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    result = num2 !== 0 ? num1 / num2 : "Error: Division by zero!";
  } else if (operation === "^") {
    result = Math.pow(num1, num2);
  } else if (operation === "sqrt") {
    result = `√${num1} = ${Math.sqrt(num1).toFixed(2)}, √${num2} = ${Math.sqrt(num2).toFixed(2)}`;
  } else {
    result = "Invalid operation!";
  }

  // Show the result
  alert("Result: " + result);
} else {
  alert("Calculation cancelled.");
}


let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let op = prompt("Choose operation (+, -, *, /, ^, sqrt):");

if (confirm("Perform calculation?")) {
  let result;

  switch (op) {
    case "+": result = num1 + num2; break;
    case "-": result = num1 - num2; break;
    case "*": result = num1 * num2; break;
    case "/": result = num2 !== 0 ? num1 / num2 : "Error"; break;
    case "^": result = Math.pow(num1, num2); break;
    case "sqrt": 
      result = `√${num1} = ${Math.sqrt(num1).toFixed(2)}, √${num2} = ${Math.sqrt(num2).toFixed(2)}`;
      break;
    default: result = "Invalid operation!";
  }

  alert("Result: " + result);
} else {
  alert("Cancelled.");
}


