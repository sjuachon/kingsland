/*
2. Rounding
Write a JS function that rounds numbers to specific precision.
The input comes as two numbers. The first value is the number to be rounded and the second is the precision
(significant decimal places). If a precision is passed, that is more than 15 it should automatically be reduced to 15.
Remove trailing zeroes, if any (you can use parseFloat())
The output should be printed to the console. Do not print insignificant decimals.
Examples
Input                                    Output         Input       Output
3.1415926535897932384626433832795,2         3.14        10.5,3      10.5
 */

function main(num, precision) {
    if (precision > 15){
        precision = 15;
    }
    /* let strNumber = String(num);
    console.log(isNaN(strNumber)); */
    let output = parseFloat(num.toFixed(precision));
    console.log(output);
}
main(12.54826, 2); // 12.55
main(84, 0);
main(12, 3);
main(10.5, 3); // 10.5
main(3.1415926535897932384626433832795, 2);
main(1.58462578954125468541, 16);
main(0.847532195821459248, 15);
main(4.12587954135426845, 14);