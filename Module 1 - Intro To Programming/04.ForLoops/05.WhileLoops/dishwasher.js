/* 
John works in a restaurant and is responsible for loading the dishwasher 
at the end of the day.Your task is to write a program that calculates 
whether the purchased quantity of bottles of dishwasher detergent is 
enough to wash a certain numberof dishes.Each bottleof dish soap
contains 750 ml.For each plate 5 ml of soapis needed, and for each pot 
15 mlof soap is needed.Keep in mind that on every third load, the 
dishwasher is loaded only with pots, and for all other loads the dishwasher 
is only filled withplates.You will accept sets of dirty dishes, until you 
receive the “END”command
input:
n - number of bottles of detergent
dishes - number of dishes
*/
function main(n, dishes){
    let detergent = n * 750; // each bottle has 750 ml of detergent
    let dish = dishes.shift();
    let i = 1;
    plates = 0;
    pots = 0;
    while(dish !== "End")
    {
        if(i % 3 === 0){
            pots += dish;
            detergent -= dish * 15;
        } else {
            plates += dish;          //plates = 53
            detergent -= dish * 5;   //detergent = 1500 - 53*5
        }
        dish = dishes.shift();
        i++;
    }
    if(detergent >= 0){
        console.log(`Detergent was enough!`);
        console.log(`${plates} plates and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml`);

    } else {
        console.log(`Not enough detergent, ${Math.abs(detergent)} ml more necessary.`)
    }
}
main(2, [53,65,55, "End"]);
main(4,[2,10,6,8,9,4,10,2,4,7,8,"End"]);
