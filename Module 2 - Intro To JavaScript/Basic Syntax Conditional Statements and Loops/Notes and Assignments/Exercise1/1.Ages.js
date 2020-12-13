
/*
1. Ages Coded by Sidney Juachon
Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder. The
input comes as single number parameter. The bounders are:
• 0-2 – baby;
• 3-13 – child;
• 14-19 – teenager;
• 20-65 – adult;
• >=66 – elder;
• All the values are inclusive.
Examples
Input   Output
20      adult
1       baby
100     elder
*/
function main(age) {
    let personType = "";
    if (0 <= age && age <= 2) {
        personType = "baby";
    } else if ( 3 <= age && age <= 13) {
        personType = "child";
    } else if (14 <= age && age <= 19) {
        personType = "teenager";
    } else if (20 <= age && age <= 65) {
        personType = "adult";
    } else if (age >= 66) {
        personType = "elder";
    }
    ///// output //////
    console.log(personType);
}
main(20);
main(1);
main(100);