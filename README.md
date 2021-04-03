# _Mr. Roboger's Neighborhood_

#### _Returns messages based on user input, 4/2/21_

#### By _Thomas Russell_

## Description

_ _

## Setup/Installation Requirements

Software Requirements
1. Internet browser
2. A code editor like VSCode to view or edit the codebase.

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone https://github.com/tprussell19/mr-robogers-neighborhood`.
2. Navigate into the `mr-robogers-neighborhood` directory, and open in VS Code or preferred text editor using `code .` in the command line.
3. Open index.html in your preferred browser.

#### Find my website here: https://tprussell19.github.io/mr-robogers-neighborhood !

## Tests/Specs

#### Description: toInteger()
Test: "Take user input and convert from string to integer"
Code: toInteger("5")
Expected output: 5

Test: "Reject any user input that is not a number"
Code: toInteger("words")
Expected output: false

#### Description: firstNumber()
Test: "Push parsedInput to an array"
Code: firstNumber(5);
Expected output: [5]

Test: "Do not add parsedInput to numberArray if it is NaN"
Code: input = "words"
firstNumber("words");
Expected output: undefined

#### Description: numberFill()
Test: "Push all numbers up to and including the inputted number into an array"
Code: numberFill(5);
Expected output: [0,1,2,3,4,5]

#### Description: backToStrings()
Test: "It should return all values from numberAray as strings"
Code: backToStrings(numberArray);
Expected output: "0","1","2","3","4","5"

#### Description: beepBoop()
Test: "If stringArray includes "3", push neighbor to returnArray"
Code: beepBoop(3);
Expected output: "Won't you be my neighbor?"

Test: "If stringArray includes "2", push boop to returnArray"
Code: beepBoop(2);
Expected output: "Boop!"

Test: "If stringArray includes "1", push beep to returnArray"
Code: beepBoop(1);
Expected output: "Beep!"

Test: "If stringArray includes anything else, push it to returnArray as is"
Code: beepBoop(0);
Expected outcome: "0"

## Known Bugs

No known bugs

## Contact

_Please contact through Github_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _VSCode_

### License

MIT License.

Copyright (c) 2021 _Thomas Russell_