/*
Graduation
Description - Write a program that calculates the average grade of a student 
from his entire education.
Input
●On the first line you will receive the name of the student, and on 
each following line his annual grades. 
-The student passes to upper class, if his annual grade is 4.00 or greater.
●If his grade is less than 4.00, he has to repeat the class.

Output
●If the student graduates 12th class, you have to print:
○“{student name} graduated. Average grade: {average grade from his entire education}
”The grade should be formatted to the second decimal point.
*/
function main(student, grades){
    gpa = 0;
    grade = grades.shift();
    i = 1; // grade counter
    gradePoints = 0; // initialize grade points to be added up.
    while(grade !== "End" && grade != undefined) {
        gradePoints += grade;
        i++;
        grade = grades.shift(); // next number in array
    }
    i--; // counter had to be decremented upon exiting the while loop.
    gpa = gradePoints / i;
    if(gpa >= 4) {
        console.log(`${student} graduated. Average grade: ${gpa.toFixed(2)}`);
    } else {
        console.log("repeat class");
    }
}
main("John",[4,5.5,6,5.43,4.5,6,5.55,6]);
main("Pia", [5.31, 1.45, 2.87, 1.59, 3.23, 4.15, 1.17, 5.59, 1.6, 6.39, 3.68, 6.76])
main("10",[3.00,2.99,5.68,3.01,4,4,6.00,4.50,2.44,5]);