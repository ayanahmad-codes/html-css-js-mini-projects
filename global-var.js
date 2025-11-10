function greet() {
  let name = "Ayan"; // local variable
  console.log("Hello", name);
}

greet();
console.log(name); // ❌ Error: name is not defined

let x = 10; // global variable

function show() {
  console.log("Inside function:", x);
}

show();
console.log("Outside function:", x);


let count = 0;

function increment() {
  count += 1; // modifying global variable
  console.log("Inside function:", count);
}

increment();
console.log("Outside function:", count);


var x = 5;

function test() {
  var x = 10; // local variable (different from global x)
  console.log("Inside function:", x);
}

test();
console.log("Outside function:", x);
