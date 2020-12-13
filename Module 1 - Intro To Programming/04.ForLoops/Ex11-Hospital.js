
/*
Hospital

Description
●For a period of time, patients are arriving every day in the hospital for examination. 
●It has initially 7doctors. 
●Each doctor can only review one patient per day, but 
sometimes there is a shortage of doctors, so other patients 
are sent to other hospitals. 
●Every third day the hospital makes calculations and if 
the number of unreviewed patients is greater than the 
number of reviewed, one more doctor is appointed. 
●As the appointment of the doctor occurs before the intake of 
patients for the day. 

●Writea program that calculates the number of reviewed 
and unreviewed patients for the given period.

Input:
The input is read from the console and contains: 
●The period for which you need to perform calculations 
    -integer in range \[1... 1000\] 
●On the following lines (equal to the number of days)
    –the number of patients arriving for review for the current day 
    -integer in range \[0... 10 000\]
Output:
Print on the console 2 lines:
●First line: "Treated patients: \{Number of patients reviewed\}." 
●Second line: "Untreated patients: \{Number of unreviewed patients\}."

*/

/* function main(numTimeCalc, arrNumPatientsArriving) {
    let numDoctors = 7; // the hospital initially has 7 doctors.
    let numPatientsUnderReview = 7; // since there are 7 doctors, 7 patients are 
                                    // currently under review.
    for (n = 1; n<=numTimeCalc; n++){
        let numPatientTrack = numPatientTrack + arrNumPatientsArriving.shift(); // input of 7,27,9,1 
        numPatientTrack -= numDoctors; // since the number of doctors look at the patient,
                                       // same number of patients leave the hospital.
        if(numPatientTrack > )
        }

    }

} */

function main(noDays, arrPatients) {
    let noTreated = 0;
    let noTreatedTally = 0;
    let noDoctors = 7;
    let i = 1; // i is the  day.
    let noUntreated = 0;
    let noUntreatedTally = 0;
    let noPatients = 0;

    for (i = 1; i <= noDays; i++) {
        if (i % 3 == 0) {
            if (noUntreatedTally > noTreatedTally) {
                noDoctors++; // new doctor is appointed
            }
        }
        noPatients = arrPatients.shift(); // 7 27 9 1 patients for 4 days.
        if (noPatients <= noDoctors) {
            noTreatedTally += noPatients;
            noUntreatedTally += 0; // no change to the tally
        } else {
            noTreatedTally += noDoctors;
            noUntreatedTally += noPatients - noDoctors;
        }

    } // next i   

    ////// output ////////////////////
    console.log(`Treated patients: ${noTreatedTally}.`);
    console.log(`Untreated patients: ${noUntreatedTally}.`);
}
main(1, [7,27,9,1]);
main(2, [7,27,9,1]);
main(3, [7,27,9,1]);
main(4, [7,27,9,1]);
main(9, [20, 549, 247, 291, 933, 244, 880, 168, 849]); //75 4106
main(10, [16, 120, 738, 148, 47, 671, 438, 295, 119, 928]); //85 3435
main(2, [503, 540]); // 14 1029
main(5, [483, 949, 171, 472, 690]); //38, 2727
main(9, [524, 808, 166, 410, 840, 838, 847, 567, 914]) /// 75 5839