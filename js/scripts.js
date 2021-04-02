// Utility Logic

let input = "5";
let parsedInput;
let warning = "Please enter a number only";
let numberArray = [];

// Business Logic

function toInteger(input) {
  parsedInput = parseInt(input);
  console.log(input, parsedInput);
  if (!isNaN(parsedInput)) {
    return parsedInput;
  } else {
    console.log(warning);
    return false
  }
}
toInteger(input);

function beepBoop(number) {
  numberArray.push(number);
  console.log(numberArray);
}
beepBoop(parsedInput);
// User Interface Logic