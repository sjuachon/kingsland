/*
5. Numbers from M to N
Write a function that receives a number M and a number N 
(M will always be bigger than N). Print all numbers from
M to N
*/

function main(myM, myN) {
    solve(myM, myN);
}

function solve(m, n) {
    let i = m;
    while(i >= n) {
        console.log(i);
        i--;
    }
}
main(5,3);