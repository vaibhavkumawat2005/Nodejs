const op = require("./operation");

let data = process.argv;
let records = data.slice(2);
console.log(records);
let a = parseInt(records[0]);
let b = parseInt(records[1]);
let opType = records[2];

switch (opType) {
  case "add":
    console.log(op.add(a, b));
    break;
  case "sub":
    console.log(op.sub(a, b));
    break;
  case "rectangle":
    console.log(op.rectangle(a, b));
    break;
  case "triangle":
    console.log(op.triangle(a, b));
    break;
  case "circle":
    console.log(op.circle(a, b));
    break;
  case "null":
    console.log("Please enter a valid operation type (add/sub)");
    break;
  default:
    console.log("Invalid operation type. Please use 'add' or 'sub'.");
    break;
}
