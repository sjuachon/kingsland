function main(num) {
    let sum=0; 
    while (num != 0){
        sum += num % 10; // 5634 - get the four out of there
        num = Math.floor(num/10); // divide by 10 then drop the 4.
    } // next while with new num = 563

    console.log(sum);

}
main(1234);
main(5634);
main(789);