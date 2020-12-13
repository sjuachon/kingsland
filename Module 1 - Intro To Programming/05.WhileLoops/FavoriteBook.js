function main(favoriteBook, bookCo){
    let book = bookCo.shift();
    while(book != favoriteBook && book != undefined) {
        console.log(`  Invalid book: ${book}`);
        book = bookCo.shift();
    }
    if (book == favoriteBook) {
        console.log('Book Found!');
    }
}
main("The Mad Hatter", ["winnie the Pooh", "Alice in Wonderland"]);