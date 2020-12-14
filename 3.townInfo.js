/*
3. Town Info - code by Sidney Juachon
You will be given 3 parameters. The first parameter will be the name of the 
town (string), the second – the population (number) and the third the area (number). 
Print the result in the following format:
"Town {town name} has population of {population} and area {area} square km."
Examples
Input       Output
'Atlanta',  Town Atlanta has population of 420003 and area 347 square km.
420003,
347
*/
function main(townName, population, area) {
    console.log(`Town ${townName} has population of ${population} and area ${area} square km.`);
}
main('Atlanta', 420003, 347);