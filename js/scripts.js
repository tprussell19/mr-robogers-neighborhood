// Utility Logic

const input = "5";
let parsedInput;
const warning = "Please enter a number only";
let initialArray = [];
let numberArray = [];
let stringArray = [];
// Business Logic

function toInteger(input) {
  parsedInput = parseInt(input);
  console.log(input, parsedInput);
  if (!isNaN(parsedInput)) {
    return parsedInput;
  } else {
    console.log(warning);
    return warning;
  }
}
toInteger(input);

function firstNumber(number) {
  if (!isNaN(parsedInput)) {
    initialArray.push(number);
    console.log(initialArray);
  } else {
    initialArray = undefined;
  }
}
firstNumber(parsedInput);
console.log(initialArray);

function numberFill(number) {
  number = initialArray;
  for (let i = 0; i <= number; i++) {
    numberArray.push(i);
    console.log(numberArray);
  }
}
numberFill();
console.log(numberArray);

function beepBoop(array) {
  const neighbor = "Won't you be my neighbor?";
  stringArray = numberArray.map(function(element) {
    return element.toString();
  });
  if (stringArray.includes("3")) {
    console.log(neighbor);
  }
}
beepBoop(numberArray);
console.log(numberArray, stringArray);

// User Interface Logic