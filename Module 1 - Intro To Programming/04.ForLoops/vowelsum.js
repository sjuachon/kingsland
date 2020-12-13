/*
/////////////////////////////////
VOWEL SUM
BY SIDNEY JUACHON
/////////////////////////////////
THIS PROGRAM COMPUTES THE SUM OF EACH VOWEL READ
IN AN ARRAY WITH INPUTS OF NUM AS AN INTEGER WHICH
TELLS HOW MANY ITEMS TO BE READ AND LETTERS
IN THE FORM OF AN ARRAY (LOWER CASE ONLY) WHICH CONTAIN
NUM LETTERS.
*/
function main(num, arrLetters){
    let sum = 0; // used as a tally.
    for (let i = 0; i < num; i++){
        let char = arrLetters.shift();
        switch (char) {
            case "a":
                sum += 1;
                break;
              case "e":
                sum += 2;
                break;
              case "i":
                sum += 3;
                break;
              case "o":
                sum += 4;
                break;
              case "u":
                sum += 5;
                break;
              default:
                break;
          } // end of switch
    } // next i

//////////////OUTPUT///////////////
    console.log(sum);
}
main(3,["i","x","u"]);