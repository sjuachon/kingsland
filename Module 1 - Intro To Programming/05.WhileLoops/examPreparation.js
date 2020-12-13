/*
Exam Preparation code by Sidney Juachon
Write a program in which Martin solves problems for exams 
until he receives a message from his trainer: "Enough".
Every time he solves a problem, he gets a grade. The program should end 
when Martin receives either “Enough” command, or obtain the number of 
poor grades. 

A poor grade is a grade less or equal to 4.00.

Input:
●On the first line –number of poor grades –integer in range [1...5]
●After that repeatedly two lines:
    ○Name of a problem -text○Grade -integer in range [2...6]
    
Output:
●If Martin reaches "Enough" command, print 3 lines:
○“Average score: {average grade}”
○“Number of problems: {number of ALL problems}”
○“Last problem: {last problem’s name}”

●If he gets the specified number of poor grades:
○“You need a break, {number poor grades} poor grades.”
The average grade should be formatted to the second decimal point.

*/

function main(noPoorGrades,problems){
    problem = problems.shift();
    let i = 1; // initialize counter
    let averageScore = 0; // Average score
    let gradePoints = 0; // grade points accumulated
    let gradeTally = 0; // grade points tally
    let poorGradeTally = 0; // poor grade tally
    let twoPoorGrades = false; // two poor grade is set to true if poorGradeTally = 2
    let lastProblem = ''; // last problem
    let noProblemsTally = 0; // initialize noProblemTally for output
    let prob1 = [];
    let myvar='';
    while (problem !=="Enough" && problem != undefined) {
        if(i % 2 === 0) {
            gradePoints += problem;
            gradeTally++; // tallies the number of grade Points
            if(problem <= 4 ) {   // check for poor grades and record them in poorGradeTally.
                poorGradeTally++;
                if (poorGradeTally >= noPoorGrades) { // check if break is needed.
                    twoPoorGrades = true;
                    break;
                }
            }
        } else {
            noProblemsTally++;
            //////////myvar += problem + ",";
            prob1.push(problem);
        }
        problem = problems.shift(); // next item in problem array to be called up.
        i++; // increment i by 1.

    }///// end while ////////
    /// decrement i after exiting while loop
    //i--;
    /// if last is "Enough", the current value of noProblemsTally is after the decreement
    // happened.  the last book should be after the 2nd
    i--;
    //which is problem[i]
    averageScore = gradePoints/gradeTally;
    // console.log(noProblemsTally + ' ' + myvar);

    /////////////// PRINT OUTPUT ///////////////
    if (twoPoorGrades) {
        console.log(`You need a break, ${poorGradeTally} poor grades.`);
    } else {
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${noProblemsTally}`);
        console.log(`Last problem: ${prob1[noProblemsTally-1]}`);
    } 


} ///// End Main ///////

main(3, ['Money', 6, 'Story', 4, 'Spring Time', 5, 'Bus', 6, 'Enough']);
main(2, ['Income', 3, 'Game Info', 6, 'Best Player', 4 ]);
main(2, ['Grower', 5, 'Boxing', 6, 'MMA', 4, 'Code', 2]);