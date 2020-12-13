/*
Report System
At a charity event, payments for the purchased products are always alternated: 
cash payments and then card payments.First payment method is always cash.
The following payment rules have been establishedand are strictly enforced:
●If the product exceeds 100 dollars, it cannot be paid usingcash
●If the product is priced under 10 dollars, it cannot be paid for 
using acredit cardThe program ends either after we receive the 
command “End”, or after the necessary funds are collected.

Input
Read from the console:
●The amount neededto be collected from sales -integer in range [1...10000]
●On each subsequent line, until the “End” command is received or 
until the necessary funds are collected:
○ The prices of items to be purchased -integer in range [1...500]

Print on the console:
●In case of a successful transaction: “Product sold!”
●In case of unsuccessful transaction: “Error in transaction!”
●If the sum of all purchased products exceeds or reaches the expected 
amount, the program must be completed and two lines are printed to the console:
    ○“Average CS: {average payment in person’s cash}”
    ○“Average CC: {average card payment per person}”Payments must be formatted 
    to the second digit after the decimal point.●When the “End” command is received, 
    one line is written:
    ○“Failed to collect required money for charity
*/

function main(goal, numbers) {
    num = 0;
    num = numbers.shift();
    let i = 1; // transaction number
    cash = 0; //payment in cash
    credit = 0; // payment with credit card
    AverageCS=0; // Ave CS in person's cash
    AverageCC=0; // Ave CC payment per person
    CSTotal = 0; // Cash total collected
    CCTotal = 0; // Credit card total collected
    CashTran = 0; // Successful cash transactions
    CreditTran = 0; // Successful credit transactions

    ///// Processing /////
    while(num!=="End" && num != undefined) {
        if (i % 2 === 1) { // transaction is cash
            if (num <= 100) {
                console.log("Product sold!" + num);
                CSTotal += num;
                CashTran++;
            } else {
                console.log("Error in transaction!" + num);
            }
        }else if(i % 2 === 0) { // transaction by credit card
            if (num >= 10) {
                console.log("Product sold!" + num);
                CCTotal += num;
                CreditTran++;
            } else {
                console.log("Error in transaction!" + num);
            }
        }
        i++; // next transaction
        num = numbers.shift();

    } /// end of while loop
    // check if enough money is collected for charity 
    // where CSTotal + CCTotal = TotalSales > goal.
    TotalSales = CSTotal + CCTotal;
    if(TotalSales > goal) {
        console.log(`Average CS: ${(CSTotal/CashTran).toFixed(2)}`);
        console.log(`Average CC: ${(CCTotal/CreditTran).toFixed(2)}`);
    } else {
        console.log("Failed to collect required money for charity.");
    }
//console.log(num);
}

main(500,[120,8,63,256,78,317]);