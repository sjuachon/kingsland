/*

1.Back to the Past
Josh is 18 years old and receives a legacy that consists of X amount 
of money and time machine. He decided to return until 1800, but he did not 
know if the money would suffice to live without working.
●Write a program that calculates whether Josh will have enough money 
to not have to work until a certain year. 
●Assuming that for every even year (1800, 1802, etc.)will spend 12 000 
dollars. 
●For each odd (1801, 1803, etc.) will spend 12 000 + 50 
*[the years age in a given year\].
Input
The input is read from the console and contains exactly 2 lines:
●Legacy money –real number in range \[1.00... 1,000,000.00\] 
●Year to be lived (inclusive) –integer in range\[1801... 1900\]

OutputPrint on the console a singleline. 
The amount must be formatted to two decimal digits:
●If the money are enough:
   ○"Yes! He will live a carefree life and will have \{N\} dollars left." 
–where N are the money that will remain
●If the money are NOTenough:○"He will need \{М\} dollars to survive." 
    -where M are money he needs

*/
function main(money, year){
    let year1 = 1800;
    n = 18; // initialize Josh's age at 18 in 1800.
    for(iyear = 1800; iyear <=year; iyear++) {
        if (iyear % 2 == 0) {
            money -= 12000; //12000 dollars spent on even years
        } else {
            money -= (12000 + 50*(n));
            
        }
        n++;  // increment Josh's age at the end of each For loop.
    }
    if (money > 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    } else {
        money = Math.abs(money);
        console.log(`He will need ${money.toFixed(2)} dollars to survive.`);
    }
    
} // end main

main(50000,1802);
main(400000, 1841);
    

