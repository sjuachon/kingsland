/*
This program ACCOUNT BALANCE, calculate the balance based on
a series of transactions that are are in the form of an array.
*/

function main(incExpense) {
    let sum = 0;
    let transaction = incExpense.shift();
    let balance = 0
    while(transaction != "End" && transaction != undefined) {
        if (transaction >= 0) {
            balance += transaction; // increase the balance
            console.log(`Increase: ${transaction.toFixed(2)}`);
        } else {
            balance += transaction; //decrease the balance since the entry is negative.
            console.log(`Decrease: ${Math.abs(transaction.toFixed(2))}`);
                        /// make sure to use Math.abs to ensure the "-" doesn't show up
                        /// as a decrease (double negative)
        }
        transaction = incExpense.shift();
        
    }// print out the balance.
    console.log(`Balance: ${balance.toFixed(2)}`);
}

main([500, 15.5, -80.35, "End"]);
main([120, -505, 715, 'End']);