let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("Random number:", randomNumber);


let r = Number(prompt("Enter radius of circle:"));
let area = Math.PI * Math.pow(r, 2);
console.log("Area of circle is:", area.toFixed(2));


let radius = Number(prompt("Enter radius of circle:"));
let confirmCalc = confirm("Do you want to calculate the area?");

if (confirmCalc) {
  let area = Math.PI * Math.pow(radius, 2);
  console.log("Area of circle:", area.toFixed(2));
} else {
  console.log("Calculation cancelled.");
}


