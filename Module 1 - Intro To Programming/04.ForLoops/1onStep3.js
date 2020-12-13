function main(n){
    let result = ''
    for (i = 1; i <= n; i+=3) {
        if (i == 1){
            result =i;
        }else {
            result += ",";
            result += i;
        }

    } // next i
////////////// output ////////////////
console.log(result);
}
main(10);
main(7);
main(14);