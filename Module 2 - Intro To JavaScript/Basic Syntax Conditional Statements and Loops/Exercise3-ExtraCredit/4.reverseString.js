/*4. Reverse String - coded by Sidney Juachon
Write a program which reverses a string and print it on the console.
Examples
Input       Output
Hello       olleH
Kingsland   dnalsgniG
12345       5432 */

function main(strInput){
    let strOutput = '';
    let strLength = strInput.length;
    for (let i = strLength-1; i >= 0; i--){
        //console.log(strInput.substr(i,1)); // was used to extract each character
        strOutput += strInput.substr(i,1);
    }
    console.log(strOutput);
}
main('Hello');
main('Kingsland');
main('12345');