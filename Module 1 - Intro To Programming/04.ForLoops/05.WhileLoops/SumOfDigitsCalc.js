function main(numbers){
    let num = numbers.shift();
    let sum = 0;
    while(num !== 'End') {
        let sum = 0;
            for(i=num; i>0; i=Math.trunc(i/10)) {
                sum += i % 10;
            }
    console.log(`Sum of digits = ${sum}`);
    num = numbers.shift();
        }
}
console.log("Goodbye");
main([157,99,5,438,"End"]);