/*
Grades
Description: Write a program to ​calculate statistics​ of the exam ​grades​.
In the beginning, the program receives the ​number​ of ​students​ attended the 
examination and ​its grade for each student​.In the end, the program should 
print ​the percentage of students​ with grades 
between ​2.00 and 2.99​, 
between ​3.00 and 3.99​, ​4.00 and 4.99​, 
and between ​5.00 or more​.
Also the ​average grade​ of the exam. 
Input: 
Read from the console a ​series of numbers​, each on a ​separate​ line:
●The ​first​ line - ​number​ of students ​attended​ the exam - an integer 
in the range \[1 ... 1000\]
●For each student on a separate line​ - grade of the exam - 
real number in the range \[2.00 ... 6.00\]

Output: 
Print​ on the console ​5 rows​ that contain the following information:
●"Top students: \{percent student with grade 5.00 or more\}%"
● "Between 4.00 and 4.99: \{between 4.00 and 4.99 inclusive\}%"
●"Between 3.00 and 3.99: \{between 3.00 and 3.99 inclusive\}%"
●"Fail: \{less than 3.00\}%"
●"Average: \{average grade\}"
All numbers must be ​formatted​ to the s​econd decimal place​.
*/

function main(n, grades) {
    let i = 0;
    let gpa = 0;
    let averageGrade = 0;
    let grade = grades.shift();
    totalGradePoints = 0;
    topStudents = 0;
    bet4To499 = 0;
    bet3To399 = 0;
    failStudents = 0;
    topStudentsCount = 0;
    bet4To499Count = 0;
    bet3To399Count = 0;
    failStudentsCount = 0;

    for (i=1; i<=n; i++) {
        if(grade >= 5) {
            topStudentsCount++;
        }
        else if(4.00 <= grade && grade <= 4.99){
            bet4To499Count++;
        }
        else if(3.00 <= grade && grade <= 3.99){
            bet3To399Count++;
        }
        else {
            failStudentsCount++;
        }
        totalGradePoints += grade;
        grade = grades.shift();
    }//// end of for loop

    /////// Output ////////////
    
    topStudents = topStudentsCount / n * 100;
    bet4To499 = bet4To499Count / n * 100;
    bet3To399 = bet3To399Count / n * 100;
    failStudents = failStudentsCount / n * 100;
    averageGrades = totalGradePoints / n;

    console.log(`Top Students: ${topStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${bet4To499.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${bet3To399.toFixed(2)}%`);
    console.log(`Fail: ${failStudents.toFixed(2)}%`);
    console.log(`Average: ${averageGrades.toFixed(2)}`);
    //console.log(`Number of students: ${n}`);
}/////// end of main

main(10,[3.00,2.99,5.68,3.01,4,4,6.00,4.50,2.44,5]);