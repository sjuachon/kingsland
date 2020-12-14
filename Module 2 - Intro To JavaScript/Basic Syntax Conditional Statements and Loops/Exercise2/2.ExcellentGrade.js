/*
2. Excellent Grade - coded by Sidney Juachon
Write a function that receives a single number and checks if the grade is excellent or not.
If it is, print "Excellent", otherwise print "Not excellent"
Examples
Input   Output
5.50    Excellent
4.35    Not excellent
*/
function main(yourGoodGrade) {
    solve(yourGoodGrade);
}

function solve(grade) {
    if(grade >= 5.50) {
        console.log("Excellent");
    } else {
        console.log("Not excellent");
    }
}
main(5.50);
main(4.35);
main(5.60);