/*
11. Sum of Odd Numbers
Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.
Input
You will receive a number – n. This number shows how many odd numbers you should print.
Output
Print the next n odd numbers, starting from 1, separated by new lines. On the last line, print the sum of these
numbers.
Constraints
• n will be in the interval [1…100]
Examples
Input   Output      Input   Output
  5         1           3       1
            3                   3
            5                   5
            7               Sum: 9
            9
        Sum: 25    
*/

function main(num) {
    let sumOfOdds = 0; // sumOfOdds accummulator starts at 0
    let numOdd = 1; // odd number to be printed
    if(1 <= num && num <= 100) {
        for (let i = 1; i <= num; i++) {
            console.log(numOdd)
            sumOfOdds += numOdd;
            numOdd += 2;
        }
    } else {
        console.log("Your unput is out of range or invalid!");
    }
    console.log(`Sum: ${sumOfOdds}`);
}
main(5);
main(3);