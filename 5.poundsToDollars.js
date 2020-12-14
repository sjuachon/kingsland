/*
5. Pounds to Dollars
Write a function that converts British pounds to dollars formatted to 3rd decimal point.
• 1 British Pound = 1.31 Dollars
Examples
Input       Output
80          104.800
39           51.090
*/
function main(gbp){
    let usd = 1.31 * gbp;
    console.log(usd.toFixed(3));
}
main(80);
main(39);