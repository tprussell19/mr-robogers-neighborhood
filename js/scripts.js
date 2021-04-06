// Utility Logic
// const warning = "Please enter a number only";
// const neighbor = "Won't you be my neighbor?";
// const boop = "Boop!";
// const beep = "Beep!";
// let initialArray = [];
// let numberArray = [];
// let stringArray = [];
// let returnArray = [];
// Business Logic

function beepBoop(input) {
  console.log(input);
  const warning = "Please enter a number only";
  const neighbor = "Won't you be my neighbor?";
  const boop = "Boop!";
  const beep = "Beep!";
  let initialArray = [];
  let numberArray = [];
  let stringArray = [];
  let returnArray = [];
  const parsedInput = parseInt(input);
  function toInteger(input) {
    if (!isNaN(parsedInput)) {
      return parsedInput;
    } else {
      return warning;
    }
  }
  toInteger(input);
console.log(parsedInput);

  function firstNumber(number) {
    if (!isNaN(number)) {
      initialArray.push(number);
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
    }
  }
  numberFill(initialArray);
console.log(numberArray);

  function backToStrings(numberArray) {
    stringArray = numberArray.map(function(element) {
      return element.toString();
    });
  }
  backToStrings(numberArray);
console.log(stringArray);

  function returnToUser(stringArray) {
    for (i = 0; i < stringArray.length; i++) {
      if (stringArray[i].includes("3")) {
        returnArray.push(neighbor);
      } else if (stringArray[i].includes("2")) {
        returnArray.push(boop);
      } else if (stringArray[i].includes("1")) {
        returnArray.push(beep);
      } else if (stringArray[i] === undefined) {
        break;
      } else {
        returnArray.push(i);
        returnArray = returnArray.join(', ');
        console.log(returnArray);
        return returnArray;
      }
    }
  }
  returnToUser(stringArray);
  console.log(input, initialArray, numberArray, stringArray, returnArray);
}

// User Interface Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const inputtedText = $("input#numberInput").val();
    $("#returnedText").text(beepBoop(inputtedText));
  })
});
