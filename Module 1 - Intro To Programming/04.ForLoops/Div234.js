/*
write a function to find statistics about division to 2, 3, and 4.
Receives a count n and n integers as array
finds in percentages how many of these integers can divide 
without a remainder by 2, 3, 4
Prints the percentages, formatted to the second decimal digit.


*/

function main(n, numbers){
    let div2 = 0;
    let div3 = 0; 
    let div4 = 0;

    for(let i=1; i<=n; i++) {
        // get 1st number from the array
        let number = numbers.shift();

        if (number % 3 ===0) {
            div3++; }
        if (number % 4 ===0) {
            div4++; }
        if (number % 2 ===0) {
           div2++; }
    }
    console.log((div2/n*100).toFixed(2) + '%');
    console.log((div3/n*100).toFixed(2) + '%');
    console.log((div4/n*100).toFixed(2) + '%');
}
main(3, [3,6,9]);