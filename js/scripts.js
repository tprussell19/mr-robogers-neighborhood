let returnArray = [];
function doEverything (number) {
  let initialArray = [];
  let numberArray = [];
  let stringArray = [];

  function firstNumber(number) {
    initialArray = [];
    initialArray.push(number);
    return initialArray;
  }
  firstNumber(number);
  function numberFill(number) {
    number = initialArray;
    numberArray = [];
    for (let i = 0; i <= number; i++) {
      numberArray.push(i);
    }
    return numberArray;
  }
  numberFill(initialArray);
  function backToStrings() {
    stringArray = [];
    stringArray = numberArray.map(function(element) {
      return element.toString();
    });
    return stringArray;
  }
  backToStrings(numberArray);
  function beepBoop() {
    const neighbor = "Won't you be my neighbor?";
    const boop = "Boop!";
    const beep = "Beep!";
    returnArray = [];
    stringArray.forEach(function (i) {
      if (stringArray[i].includes("3")) {
        returnArray.push(neighbor);
      } else if (stringArray[i].includes("2")) {
        returnArray.push(boop);
      } else if (stringArray[i].includes("1")) {
        returnArray.push(beep);
      } else {
        returnArray.push(i);
      }
    });
    return returnArray;
  }
  beepBoop(stringArray);
  returnArray = returnArray.map(function(element) {
    return " " + element;
  })
  console.log(returnArray);
  return returnArray;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const inputtedText = parseInt($("input#numberInput").val());
    if (!isNaN(inputtedText)) {
      doEverything(inputtedText);
      $("#return").show();
      $("#returnedText").text(returnArray);
    } else {
      const warning = "Please enter a number only";
      $("#warning").html(warning);
      $("#return").hide();
    }
  })
})