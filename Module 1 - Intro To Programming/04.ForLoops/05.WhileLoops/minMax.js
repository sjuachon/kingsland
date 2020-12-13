/*
The program prints the biggest and the smallest number.
*/

function main(arrNumbers) {
    let num = arrNumbers.shift();
    max = num;
    min = num
    while (num != "END" && num != undefined) {
        if (num > max) {
            max = num;
        }

        if(num < min) {
            min = num;
        }

        num = arrNumbers.shift();
    }

    console.log(`Min number: ${min}`);
    console.log(`Max number: ${max}`);
}// end of main

