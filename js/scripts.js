// Utility Logic

let input = "words";
let warning = "Please enter a number only";

// Business Logic

function toInteger(input) {
  let parsedInput = parseInt(input);
  console.log(input, parsedInput);
  if (!isNaN(parsedInput)) {
    return parsedInput;
  } else {
    console.log(warning);
    return false
  }
}
toInteger(input);
// User Interface Logic