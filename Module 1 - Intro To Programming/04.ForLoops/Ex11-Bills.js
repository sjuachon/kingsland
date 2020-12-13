/*
Write a program to calculate the average cost per month for a family over 
a period of time. For each month the costs are as follows:
●For electricity-every month the bill is different and will be read from the console
●For water-20$
●For Internet-15$
●For others-sum the bills for electricity, water and Internet and add 20%

For each bill, you need to calculate how much total is paid for all months.

Input:
The input is read from the console: 
●The months for which the average cost is searched –integer inrange \[1... 100\] 
●For each month –the bill for electricity –a real number in range \[1.00... 1000.00\]

Output:
Print to the console 5 rows: 
●"Electricity: \{electricity for all months\} $" 
●"Water: \{water for all months\} $" 
●"Internet: \{Internet for all months\} $" 
●"Other: \{Other for all months\} $" 
●"Average: \{Average all costs per month\} $ 

"All bills should be formatted to the 2nd digit after the decimal point

*/

function main(months, arrBills) {
    let electricityTrack = 0;
    for (i=0; i < months; i++) {
        let nCheck = arrBills.shift(); //input 68.63, 68.63, 132.53, 93.53,  63.22
        electricityTrack += nCheck; // from the previeous nCheck, add the recently read one 
                         // from the array
    } // next i and next nCheck
    
    /////// calculate bills for all months //////////
    TotalElectricity = electricityTrack;
    TotalWater = 20 * months;
    TotalInternet = 15 * months;
    TotalOthers = 1.2 * (TotalElectricity + TotalWater + TotalInternet);
    // Total Bill for all months
    TotalBill = TotalElectricity + TotalWater + TotalInternet + TotalOthers;

    /////// output ///////////////////
    console.log(`Electricity: ${TotalElectricity.toFixed(2)} $`);
    console.log(`Water: ${TotalWater.toFixed(2)} $`);
    console.log(`Internet: ${TotalInternet.toFixed(2)} $`);
    console.log(`Other: ${TotalOthers.toFixed(2)} $`);
    console.log(`Average: ${(TotalBill/months).toFixed(2)} $`);
} /// end of main

main(5, [68.63,68.63,132.53,93.53,63.22]);
