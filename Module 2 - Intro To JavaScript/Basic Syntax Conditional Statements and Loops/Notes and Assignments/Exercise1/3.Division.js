/*
3. Division
You will be given a number and you must return whether that number is divisible by 
the following numbers: 2, 3, 6, 7, or 10. You should always take the bigger 
division. If the number is divisible by both 2 and 3 it is also divisible by 6
and you should print only the division by 6. If a number is divisible by 2 it 
is sometimes also divisible by 10 and you should print the division by 10. 
If the number is not divisible by any of the given numbers print 
"Not divisible".

Otherwise print "The number is divisible by {number}".
Input       Output
30          The number is divisible by 10
15          The number is divisible by 3
12          The number is divisible by 6
1643        Not divisible
*/
function main(num) {
    let boolDivBy02 = false;
    let boolDivBy03 = false;
    let boolDivBy06 = false;
    let boolDivBy07 = false;
    let boolDivBy10 = false;

    if (num % 2 === 0) {
        boolDivBy02 = true;
    }
    if(num % 3 === 0) {
        boolDivBy03 = true;
        boolDivBy02 = false;
    }
    if(num % 6 === 0) {
        boolDivBy06 = true;
        boolDivBy02 = false; // must be set to false to make room for divisible by 6
        boolDivBy03 = false; // must be set to false to make room for divisible by 6
    }
    if (num % 7 === 0){
        boolDivBy07 = true;
        boolDivBy02 = false; // just in case the number is 42
        boolDivBy03 = false; // just in case the number is 42
        boolDivBy06 = false; // just in case the number is 42
    }
    if(num % 10 === 0) {
        boolDivBy10 = true;
        boolDivBy07 = false; // just in case the number is 210 or any multiple of it.
        boolDivBy06 = false; // just in case the number is 210 or any multiple of it.
        boolDivBy03 = false; // just in case the number is 210 or any multiple of it.
        boolDivBy02 = false; // just in case the number is 210 or any multiple of it.
    }
    if (boolDivBy02){
        console.log("The number is divisible by 2");
    } else if (boolDivBy03){
        console.log("The number is divisible by 3");
    } else if (boolDivBy06){
        console.log("The number is divisible by 6");
    } else if (boolDivBy07){
        console.log("The number is divisible by 7");
    } else if (boolDivBy10){
        console.log("The number is divisible by 10");
    } else {
        console.log("Not divisible")
    }
}
main(30);
main(15);
main(12);
main(1643);
