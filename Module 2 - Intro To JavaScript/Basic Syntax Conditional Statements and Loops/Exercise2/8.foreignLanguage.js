/*
8. Foreign Languages - code  by Sidney Juachon
Write a program, which prints the language, that a given country speaks. 
You can receive only the following combinations: English is spoken in 
England and USA; Spanish is spoken in Spain, Argentina and Mexico; for the
others, we should print "unknown". 

Input
You will receive a single country name.
Output
Print the language, which the country speaks, or if it is 
unknown for your program, print "unknown".

Examples
Input       Output      Input       Output
USA         English     Germany     unknown
Hint
Think how you can merge multiple cases, in order to avoid writing more code than you need to.


*/

function main(country) {
    let language = '';
    switch(country){
        case "USA":
        case "England":
        case "South Africa":
        case "Canada":
            language = "English";
            break;
        case "Mexico":
        case "Argentina":
        case "Spain":
        case "Colombia":
        case "Panama":
        case "Chile":
        case "Venezuela":
            language = "Spanish";
            break;
        default:
            language = "unknown";
            break;

    }
    console.log(language);
}
main("Spain");
main("USA");
main("Canada");
main("France");