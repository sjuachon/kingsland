/*
4. Numbers from N to 1 - Coded by Sidney Juachon
Create a function that receives a number N and prints all the numbers 
from N to 1. Try using while loop
*/
function main(input) {
    solve(input);
}

function solve(n) {
    while(n >= 1) {
        console.log(n);
        n--;
    }
}
main(5);