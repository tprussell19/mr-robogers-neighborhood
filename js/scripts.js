// Utility Logic
const warning = "Please enter a number only";
const neighbor = "Won't you be my neighbor?";
const boop = "Boop!";
const beep = "Beep!";
let initialArray = [];
let numberArray = [];
let stringArray = [];
let returnArray = [];
// Business Logic

function toInteger(inputtedText) {
  parsedInput = parseInt(inputtedText);
  if (!isNaN(parsedInput)) {
    return parsedInput;
  } else {
    return warning;
  }
}

function firstNumber(number) {
  if (!isNaN(parsedInput)) {
    initialArray.push(number);
  } else {
    initialArray = undefined;
  }
}

function numberFill(number) {
  number = initialArray;
  for (let i = 0; i <= number; i++) {
    numberArray.push(i);
  }
}

function backToStrings(numberArray) {
  stringArray = numberArray.map(function(element) {
    return element.toString();
  });
}

function beepBoop(stringArray) {
  for (i = 0; i < stringArray.length; i++) {
    if (stringArray[i].includes("3")) {
      returnArray.push(neighbor);
    } else if (stringArray[i].includes("2")) {
      returnArray.push(boop);
    } else if (stringArray[i].includes("1")) {
      returnArray.push(beep);
    } else if (stringArray[i] === undefined) {
      break;
    } else
      {
      returnArray.push(i);
    }
  }
}

// User Interface Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const inputtedText = $("input#numberInput").val();
    toInteger(inputtedText);
    firstNumber(parsedInput);
    numberFill(initialArray);
    backToStrings(numberArray);
    beepBoop(stringArray);
    returnArray = returnArray.join(', ');
    $("#return").show();
    $("#returnedText").text(returnArray);
  })
})