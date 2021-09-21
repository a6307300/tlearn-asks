function exponent (a,b) {
    if (b==0) {return 1;};
    if (b==1) {return a;};
    if (b>=2) {
        return a*exponent(a,b-1)
    }
}
console.log(exponent(2,4));