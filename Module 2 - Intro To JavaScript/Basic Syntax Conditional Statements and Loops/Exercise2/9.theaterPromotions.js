/*
9. Theatre Promotions code by Sidney Juachon (Le Sid)
A theatre is doing a ticket sale, but they need a program to calculate the price 
of a single ticket. If the given age does not fit one of the categories, you 
should print "Error!". You can see the prices in the table below:
Day / Age   0 <= age <= 18  18 < age <= 64  64 < age <= 122
Weekday         12$               18$               12$
Weekend         15$               20$               15$
Holiday         5$                12$               10$
Input
The input comes in two parameters. The first one will be the type of 
day (string). The second – the age of the person (number).
Output
Print the price of the ticket according to the table, or "Error!" if the age is 
not in the table.

Constraints
• The age will be in the interval [-1000…1000].
• The type of day will always be valid.
Examples
Input       Output      Input           Output      Input           Output
'Weekday',     18$      'Holiday',-12   Error!      'Holiday', 15     5$
42     
*/
function main(typeOfDay, age){
    let price = '';
    if(0 <= age && age <= 18) {
        if(typeOfDay === 'Weekday'){
            price = '12$';
        } else if(typeOfDay === 'Weekend') {
            price = '15$';
        } else if(typeOfDay === 'Holiday') {
            price = '5$';
        } 
    } else if(18 < age && age <= 64) {
        if(typeOfDay === 'Weekday'){
            price = '18$';
        } else if(typeOfDay === 'Weekend') {
            price = '20$';
        } else if(typeOfDay === 'Holiday') {
            price = '12$';
        }
    } else if(64 < age && age <= 122) {
            if(typeOfDay === 'Weekday'){
                price = '12$';
            } else if(typeOfDay === 'Weekend') {
                price = '15$';
            } else if(typeOfDay === 'Holiday') {
                price = '10$';
            }
    } else {
        price = 'Error!'
    }
console.log(price); // print output
} 
main('Weekday', 42);
main('Holiday', -12);
main('Holiday', 15);
