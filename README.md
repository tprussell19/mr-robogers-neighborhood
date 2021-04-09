# _Mr. Roboger's Neighborhood_

#### _Returns messages based on user input, 4/2/21_

#### By _Thomas Russell_

## Description

_An application that takes a number from the user and returns a list of all of the numbers leading up to that number with a few exceptions. If the number includes a "1" as one of the digits, it will return "Beep!" instead of the number. Likewise, if a "2" appears in a number in the list, it will be returned as "Boop!". Finally, "3"s are returned with the message "Won't you be my neighbor?"_

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

#### Description: firstNumber()
Test: "Push inputtedText to an array"
Code: firstNumber(5);
Expected output: [5]


#### Description: numberFill()
Test: "Push all numbers up to and including the inputted number into an array"
Code: numberFill(5);
Expected output: [0,1,2,3,4,5]

#### Description: backToStrings()
Test: "It should return all values from numberAray as strings"
Code: backToStrings(numberArray);
Expected output: ["0","1","2","3","4","5"]

#### Description: beepBoop()
Test: "If stringArray includes "3", push neighbor to returnArray"
Code: beepBoop(3);
Expected output: ["0","1","2","Won't you be my neighbor?"]

Test: "If stringArray includes "2", push boop to returnArray"
Code: beepBoop(2);
Expected output: ["0","1","Boop!"]

Test: "If stringArray includes "1", push beep to returnArray"
Code: beepBoop(1);
Expected output: ["0","Beep!"]

Test: "If stringArray includes anything else, push it to returnArray as is"
Code: beepBoop(0);
Expected outcome: ["0"]

#### Description: doEverything()
Test: "Runs the other functions and adds a space between elements in returnArray"
Code: doEverything(4);
Expected outcome: [" 0"," Beep!"," Boop!"," Won't you be my neighbor?"," 4"]

## Known Bugs

* No known bugs

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