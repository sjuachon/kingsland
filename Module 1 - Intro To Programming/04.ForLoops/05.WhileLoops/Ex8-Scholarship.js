/*
EXERCISE 8
SCHOLARSHIP.JS
BY SIDNEY JUACHON
Scholarship Students can apply for ​social scholarship​ or for 
​scholarship for excellent performance​. The requirements for 
social scholarship are: family income ​less than the minimum 
income < minWage && gpa >= 4.5
wage​ and ​GPA of at least 4.5​ (out of 6). The socialscholarship 
equals ​35% of the minimum wage​. 
amountSocialScholarship = 0.35 * minWage;
The requirement for scholarship 
for excellent results is ​a GPA of atleast 5.5. ​The amount of 
it equals ​the student's GPA multiplied by 25​.

Write a program which ​gives information whether a student 
qualifies for a scholarship​. If he or she does qualify,print the 
scholarship which will have ​the bigger amount​​in their case​.

Input:
The input consists of ​3 lines​:
1.Income in leva - a real number in the range [0.00..6000.00]
2.Grade point average (GPA) - a real number in the range [2.00...6.00]
3.Minimum wage  - a real number in the range [0.00..1000.00]

Output

●If the student ​does not qualify​ for a scholarship, 
print:"You cannot get a scholarship!"
●If the student ​does qualify for a social scholarship​ and its 
amount is ​bigger than the scholarship for excellent results's 
amount​, print:"You get a Social scholarship {​amount}​ BGN"
●If the student ​does qualify for a scholarship for excellent 
results​ and its amount ​equals or is bigger than the social 
scholarship's amount​, print:
●"You get a scholarship for excellent 
results {​amount​} BGN

*/
function main(income, gpa, minWage)
{
    // initialize variables
    Scholarship = 0;
    scholarshipPerf = 0;
    scholarshipSoc = 0;
    scholarshipSoc = 0.35 * minWage;
    scholarshipPerf = gpa * 25;
    // check for qualification of social scholarship
    if (gpa >= 5.5)
    {   // social or performance scholar - the larger of the two
        if(scholarshipSoc > scholarshipPerf) {
            Scholarship = scholarshipSoc;
            console.log('You get a Social Scholarship ' + Math.floor(Scholarship) + ' BGN');
        }
        else {
            Scholarship = scholarshipPerf;
            console.log('You get a scholarship for excellent results ' + Math.floor(Scholarship) + ' BGN');
        }
    } 
    else if(income < minWage && gpa >= 4.5)
    {
        Scholarship = scholarshipSoc;  
        console.log('You get a Social scholarship ' + Math.floor(Scholarship) + ' BGN');
    }
     else {
        console.log("You cannot get a scholarship!");
    }
    
}
main(480, 4.6, 450);
main(300, 5.65, 420);
main(310, 5.8, 350);