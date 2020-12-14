/*
10. Divisible by 3 - code by Sidney Juachon
Write a program, which prints all the numbers from 1 to 100, which are divisible by 3. You have to use a single for
loop. The program should not receive input
*/

function main() {
    for (let i = 1; i <= 100; i++) {
        if(i % 3 === 0) {
            console.log(i);
        }
    }
}
main();