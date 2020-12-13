/*
5. Leap Year
Write a JS function to check whether a year is leap. Leap years are either 
divisible by 4 but not by 100 or are divisible by 400. Return the result like examples below:
Examples
Input       Output
1984        yes
2003        no
4           yes ===> LoL
*/
function main(year) {
    let boolDivBy004 = false;
    let boolDivBy100 = false;
    let boolDivBy400 = false;
    if (year % 4 === 0) {
        boolDivBy004 = true;
    }
    if (year % 100 === 0) {
        boolDivBy100 = true;
        boolDivBy004 = false;
    }
    if (year % 400 === 0) {
        boolDivBy400 = true;
        boolDivBy100 = false;
        boolDivBy004 = true;
    }
    if (boolDivBy004 === true && boolDivBy100 === false || boolDivBy400) {
        console.log("yes");
    } else {
        console.log("no");
    }
        
} // end of main
main(1984);
main(2003);
main(4);
main(2100);
