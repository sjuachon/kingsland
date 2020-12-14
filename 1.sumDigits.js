/*
1. Sum Digits
Write a function which will be given a single number. Your task is to 
find the sum of its digits.
Examples
Input           Output
245678          32
97561           28
543             12
*/
function main(num) {
    let output = 0; // where the output goes
    while (num != 0){
        output += num % 10; // get the last digit
        num = Math.floor(num/10); // divide by 10 then drop the 4.
    } // next while with new num = 563

    console.log(output);

}
main(123456);
main(245678);
main(97561);
main(543);