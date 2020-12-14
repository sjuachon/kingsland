/*
2.English Name of the Last Digit Write a function that returns the 
English name of the last digit of a given number. Write a program 
that receives a number and prints the returned value from this function.
Examples
Input       Output
512             two
1               one
1643            three
*/
function main(num){
    let output = ''; // this is where the number in English words will be
                    /// stored.
    let lastDigit = 0 // last digit of the num
    lastDigit = num % 10; // divide by 10 to extract the last digit.
    if (lastDigit === 1) {
        output = 'one';
    } else if (lastDigit === 2) {
        output = 'two';
    } else if (lastDigit === 3) {
        output = 'three';
    } else if (lastDigit === 4) {
        output = 'four';
    } else if (lastDigit === 5) {
        output = 'five';
    } else if (lastDigit === 6) {
        output = 'six';
    } else if (lastDigit === 7) {
        output = 'seven';
    } else if (lastDigit === 8) {
        output = 'eight';
    } else if (lastDigit === 9) {
        output = 'nine';
    } else if (lastDigit === 0) {
        output = 'zero';
    }
    console.log(output);
}
main(512);
main(1);
main(1643);