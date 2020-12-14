/*
3. Next Day code by Sidney Juachon
Write a JS function that calculates the date of the next day by given year, 
month and day.The input comes as three number parameters. The first element 
is the year, the second is the month and the third is the day.
The output should be returned as a result of your function.
Examples
Input           Output
2016, 9, 30     2016-10-1
Hints
• Use Date()
*/
function main(year, month, day) {
    let d = new Date();
    d.setFullYear(year, month - 1, day);
    d.setDate(d.getDate() + 1);
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;// we have to add the 1 since January starts with 0.
    let dd = d.getDate(); 


    console.log(`${yyyy}-${mm}-${dd}`);
}
main(2016, 9, 30);
main(2020, 1, 2);
main(2020, 2, 29);
/* main(2019, 2, 12);
main(2015, 8, 14);
main(2020, 6, 30); */


