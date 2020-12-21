# String Calculator
Written in typescript tested in mocha.
Two versions, one with eval one without.

Handles the 4 basic operators: addition (+), subtraction (-), multiplication (*) and divition (/) with both positive and negative integers

## Both Versions
Takes in an integer expression given as a space separated string like:
- "2 + 3"
- "3 + 5 + 2"
- "4 / 2 * 5"
- "2 + -3 - -7"

## Non-eval version
Handles this with two while loops
Starting by splitting the input into two arrays one with numbers and one with operators.

first loop handles multiplication and divition second handles addition and subtraction. This is done to get the order of operations correct.

## Eval version
Since eval could be harmful depending on the input you get the first thing that happens is the input is checked against a regex to make sure it follows the form of:
(num) (operator) (num)
or
(num) ((operator) (num)) atleast once but can handle multiple operations at once

