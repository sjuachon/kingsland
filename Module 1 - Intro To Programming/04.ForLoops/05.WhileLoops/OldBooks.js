/*
Old Books
Andrea goes to her hometown after being abroad for a long time.
When she comes home, she sees her grandmother’s library and remembers 
her favourite book.
Help Andrea write a program in which Andrea enters the name of the 
book she’s searching for (String) and the capacity of the library (integer).

Until Andrea finds her favourite book or doesn’t check all books in 
the library, the program has to read every time the name of the next book 
on a separate line.

Input:
●First line of input is the name of the book Andrea’s searching for -string
●Second line is the capacity of the library -integer
●On every nex line -name of book from library -stringOutput
●If Andreadoes not find the book, print two lines:○“The book 
you search is not here!”○“You checked {count} books.”
●If Andrea finds the book, print a single line:
    ○“You checked {count} books and found it.”
*/

function main(bookName, capacity, books){
    book = books.shift();
    let i = 1; // start count at 1.
    let bookCount = 0;
    let bookFind = false; // set the bookfind to false if  not found.
    while(book !== "End" && book != undefined) {
        if (bookName === book) {
            bookCount=i-1 ; // count the previous books if found.
            bookFind = true; // set this to true if book is found.
        }
        i++; // increment the counter
        book = books.shift();
    } // end while

    i--; // decrement the counter after exiting the while loop

    if(bookFind == true){
        console.log(`You checked ${bookCount} books and found it.`);
    } else {
        console.log("The book you searched for is not here!");
        console.log(`You checked ${i} books.`);
    } // end if

} // end main function

main("Troy", 5, ["Stronger", "Life Style", "Troy", "Harry Potter", "The Mages"]);
main("Stronger", 6, ["Hunger Games", "Harry Potter", "The Man", "The Ocean", "Inlove", "Life is Strange"]);