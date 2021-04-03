// Utility Logic

const input = "0";
let parsedInput;
const warning = "Please enter a number only";
const neighbor = "Won't you be my neighbor?";
const boop = "Boop!";
const beep = "Beep!";
let initialArray = [];
let numberArray = [];
let stringArray = [];
let returnArray = [];
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

function backToStrings(numberArray) {
  stringArray = numberArray.map(function(element) {
    return element.toString();
  });
}
backToStrings(numberArray);
console.log(stringArray);

function beepBoop(stringArray) {
  for (i = 0; i < stringArray.length; i++) {
    if (stringArray[i].includes("3")) {
      returnArray.push(neighbor);
    } else if (stringArray[i].includes("2")) {
      returnArray.push(boop);
    } else if (stringArray[i].includes("1")) {
      returnArray.push(beep);
    } else {
      returnArray.push(i);
    }
  }
  console.log(returnArray);
}
beepBoop(stringArray);
console.log(initialArray, numberArray, stringArray, returnArray);

// User Interface Logic