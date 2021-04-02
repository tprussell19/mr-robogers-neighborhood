// Utility Logic

let input = "5";
let parsedInput;
let warning = "Please enter a number only";
let initialArray = [];
let numberArray = [];

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

// User Interface Logic