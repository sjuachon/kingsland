function main(incExpense) {
    let sum = 0;
    let transaction = incExpense.shift();
    let balance = 0
    while(transaction != "End" && transaction != undefined) {
        if (transaction >= 0) {
            balance += transaction;
            console.log(`Increase: ${transaction.toFixed(2)}`);
        } else {
            balance += transaction;
            console.log(`Decreaase: ${Math.abs(transaction.toFixed(2))}`);
        }
        transaction = incExpense.shift();
        
    }
    console.log(`Balance: ${balance.toFixed(2)}`);
}

main([500, 15.5, -80.35, "End"]);
