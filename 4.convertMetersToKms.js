/*4. Convert Meters to Kilometres - code by Sidney Juachon
You will be given a number that will be distance in meters. Write a program that converts meters to kilometers
formatted to the second decimal point.
Examples
Input   Output
1852    1.85
798     0.80
*/
function main(kms) {
    let outMeters = kms / 1000;
    console.log(outMeters.toFixed(2));
}