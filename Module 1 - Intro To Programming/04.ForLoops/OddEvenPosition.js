/*
Odd / Even PositionDescription
Write a program that reads the ​n​ - ​count​ of ​numbers​ entered by the user, 
and ​calculates​ the ​amount​ of the minimum​ and ​maximum​ numbers of ​
odd​ and ​even​ positions (counting from ​1​).If there ​is no ​minimum/maximum 
element print "​No​".
Input:
●On the first input line read count of numbers - N - integer \[0...100\]
●On every next line read a number 
    - floating-point number \[-100...100\]
Output: 
The output should be ​formatted​ in the following form:
"OddSum="​ + \{​sum​ of the numbers on ​odd​ positions\},
"OddMin="​ + \{​minimum​ value of the numbers of ​odd​ positions\} / \{​"No"​\},
"OddMax="​ + \{​maximum​ value of the numbers of ​odd​ positions\} / \{​"No"​\},
"EvenSum="​ + \{​sum​ of the numbers of ​even​ positions\},
"EvenMin="​ + \{​minimum​ value of the numbers of ​even​ positions\} / \{"​No​"\},
"EvenMax="​ + \{​maximum​ value of the numbers of ​even​ positions\} / \{​"No"​\}
Each number should be formatted to the second decimal point.
input 5, [3,-2,8,11,-3]
OddSum=8.00,
OddMin=-3.00,
OddMax=8.00,
EvenSum=9.00,
EvenMin=-2.00,
EvenMax=11.00


*/
function main(n, numbers) {
    if (n !== 0 && numbers !== '') {
        let num = numbers.shift();
        let OddSum = 0;
        let OddMin = undefined;
        let OddMax = undefined;
        let EvenSum = 0;
        let EvenMin = undefined;
        let EvenMax = undefined;

        for (i = 0; i < n; i++) {
            /// CHECK FOR ODD POSITIONING - REMEMBER  THAT i MUST BE 0, 2, 4, 6, ETC.    
            if (i % 2 === 0) {
                OddSum += num;
                if (num < OddMin || OddMin === undefined) {
                    OddMin = num;
                }
                if (num > OddMax || OddMax === undefined) {
                    OddMax = num;
                }
            } // END IF FOR ODD POSITIONING
            /// CHECK FOR EVEN POSITIONING - REMEMBER  THAT I MUST BE 1, 3, 5, 7, ETC.    
            if (i % 2 === 1) {
                EvenSum += num;
                if (num < EvenMin || EvenMin === undefined) {
                    EvenMin = num;
                }
                if (num > EvenMax || EvenMax === undefined) {
                    EvenMax = num;
                }
            }  // END IF FOR ODD POSITIONING

            num = numbers.shift();  // next number in array
        } // END FOR LOOP


        console.log(`Odd Sum: ${OddSum.toFixed(2)},`);
        console.log(`Odd Min: ${OddMin.toFixed(2)},`);
        console.log(`Odd Max: ${OddMax.toFixed(2)},`);
        console.log(`Even Sum: ${EvenSum.toFixed(2)},`);
        console.log(`Even Min: ${EvenMin.toFixed(2)},`);
        console.log(`Even Max: ${EvenMax.toFixed(2)},`);
    } else {
        console.log(`OddSum: 0.00,`);
        console.log(`OddMin: No`);
        console.log(`OddMax: No`);
        console.log(`EvenSum: 0.00,`);
        console.log(`EvenMin: No`);
        console.log(`EvenMax: No`);
    }
} //// END OF main FUNCTION
main(5, [3, -2, 8, 11, -3]);
main(0);
