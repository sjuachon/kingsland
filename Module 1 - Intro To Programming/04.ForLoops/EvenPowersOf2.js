function main(n){
    let result = ''
    let num = 1; // 2^0
    for (i = 0; i <= n; i+=2) {
        if (i != 0){
            result += ",";
        }
        result += num;
        num = num * 2 * 2;        
                

    } // next i
////////////// output ////////////////
console.log(result);
}
main(10);