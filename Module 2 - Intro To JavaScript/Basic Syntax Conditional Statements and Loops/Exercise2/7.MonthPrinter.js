/*
7. Month Printer
Write a program, which takes an integer from the console and prints the corresponding month. If the number is
more than 12 or less than 1 print "Error!"
Input
You will receive a single number.
Output
If the number is within the boundaries print the corresponding month, otherwise print "Error!"
Examples
Input   Output              Input Output
  2     February              13   Error!
*/
function main(month) {
    let monthType = '';
    if (month === 1)   {
        monthType = 'January';
    }
    else if (month === 2)   {
        monthType = 'February';
    }
    else if (month === 2)   {
        monthType = 'February';
    }
    else if (month === 3)   {
        monthType = 'February';
    }
    else if (month === 4)   {
        monthType = 'February';
    }
    else if (month === 5)   {
        monthType = 'February';
    }
    else if (month === 6)   {
        monthType = 'February';
    }
    else if (month === 7)   {
        monthType = 'February';
    }
    else if (month === 8)   {
        monthType = 'February';
    }
    else if (month === 9)   {
        monthType = 'February';
    }
    else if (month === 10)   {
        monthType = 'February';
    }
    else if (month === 11)   {
        monthType = 'February';
    }
    else if (month === 12)   {
        monthType = 'February';
    } else {
        monthType = 'Error!';
    }
console.log(monthType);
}
main(2);
main(13);