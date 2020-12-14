/*
1. Sort Numbers
Receive three numbers and sort them in descending order. 
Print each number on a new line.
For num1, num2, and num3 to be sorted in descending order without changing
their values, boolNum1GTNum2 = true, boolNum1GTNum3 = true, 
and boolNum2GTNum3 = true
*/
function main(num1, num2, num3) {
    let a = 0; // highest number output
    let b = 0;
    let c = 0; // lowest number output
    
    if (num1 > num2 && num2 > num3){
        a = num1;
        b = num2;
        c = num3;
    } else if (num1 > num3 && num3 > num2) {
        a = num1;
        b = num3;
        c = num2;
    } else if(num2 > num1 && num1 > num2) {
        a = num2;
        b = num1;
        c = num3;
    } else if (num2 > num3 && num3 > num1) {
        a = num2;
        b = num3;
        c = num1;
    }
    if (num3 > num1 && num1 > num2){
        a = num3;
        b = num1;
        c = num2;
    } else {
        a = num3;
        b = num2;
        c = num1;
    }
    console.log(a);
    console.log(b);
    console.log(c);
}

main(2,1,3);
main(-2, 1, 3)

