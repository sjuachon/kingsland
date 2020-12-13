/* 
4. Vacation - Coded by Sidney Juachon
You are given a group of people, type of the group, and day of the week 
they are going to stay. Based on that information calculate how much they 
have to pay and print that price on the console. Use the table below. In each
cell is the price for a single person. The output should look like that:
"Total price: {price}". The price should be formatted to the second decimal point. */

function main(numPeople, groupType, dayOfWeek){
    let price = 0; 
    let rate = 0;
    price = rate * numPeople;
    if(groupType === 'Students' && dayOfWeek === 'Friday') {
        rate = 8.45;
    }
    if(groupType === 'Students' && dayOfWeek === 'Saturday') {
        rate = 9.80;
    }
    if(groupType === 'Students' && dayOfWeek === 'Sunday') {
        rate = 10.46;
    }
    if(groupType === 'Business' && dayOfWeek === 'Friday') {
        rate = 10.90;
    }
    if(groupType === 'Business' && dayOfWeek === 'Saturday') {
        rate = 15.60;
    }
    if(groupType === 'Business' && dayOfWeek === 'Sunday') {
        rate = 16;
    }
    if(groupType === 'Regular' && dayOfWeek === 'Friday') {
        rate = 15;
    }
    if(groupType === 'Regular' && dayOfWeek === 'Saturday') {
        rate = 20;
    }
    if(groupType === 'Regular' && dayOfWeek === 'Sunday') {
        rate = 22.50;
    }
    price = rate * numPeople;
    if (numPeople >= 30 && groupType === 'Students' ) { 
        price *= 0.85;
    }
    if(numPeople >= 100 && groupType === 'Business') {
        price = rate * (numPeople - 10);
    }
    
    if(10 <= numPeople && numPeople <= 20) {
        price = rate * numPeople * 0.95;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
 main(30, 'Students', 'Sunday');
 main(40, 'Regular', 'Saturday');