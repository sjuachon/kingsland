/*
3. Stream of Letters
Write a program that reads a hidden message in a sequence of symbols.
You will receive each of them on a single line until the "End" command.
The words are initiated from the letters in the order of their reading.
Symbols which are not Latin letters should be ignored.
The words, hidden in the stream, are separated from a secret command by three letters - "c", "o" and "n".
When you first receive one of these letters, you have to mark it as visited, but it is not saved in the word.
Every time you receive the same letter, it is saved normally in the word.
After you have found all three symbols from the command, you have to print the word and a space " ".
A new word is started the same way, waiting for the secret command to be printed.
Input
● Read a sequence of lines with a single symbol each, until you receive the "End" command
Output
● Print on the console every word after the secret command followed by space

*/
function main(letters){
    let strLetter = letters.shift();
    let strWord = ''; // initialize variable
    let boolLetterCVisited = false;
    let boolLetterOVisited = false;
    let boolLetterNVisited = false;
    // while loop to get letters
    while(strLetter !=="End" && strLetter !== undefined){
        if(strLetter === 'c' && boolLetterCVisited == false){
            boolLetterCVisited = true;
        }
        else if (strLetter === 'o' && boolLetterOVisited == false) {
            boolLetterOVisited = true;
        } 
        else if (strLetter === 'n' && boolLetterNVisited == false) {
            boolLetterNVisited = true;
        }
        else {
            strWord += strLetter;
        }
        strLetter = letters.shift(); // next letter in array
    } // end while
    console.log(strWord);
}// end main
main(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 'End'])