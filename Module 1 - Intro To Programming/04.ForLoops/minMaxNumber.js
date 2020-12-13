/*
Min Max Number

This program finds the biggest and smallest number with 
inputs for and integer num for the numbers to be read
and a numbers array arrNumbers to be read.

*/

function main(num, arrNumbers){
    let min = arrNumbers.shift();
    let max = arrNumbers.shift();
    for (i = 0; i < num; i++) {
        number = arrNumbers.shift();
        if (number > max) {
            max = number;
        }
        if (number < min) {
            min = number;
        }

    } // next i
////////////// output ////////////////
console.log(`Min number: ${min}`);
console.log(`Max number: ${max}`);
}
main(3,[10,350,50]);