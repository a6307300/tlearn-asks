function exponent (a,b) {
    if(Math.trunc(b)==b) {
    if (b==0) {return 1;};
    if (b==1) {return a;};
    if (b>=2) {
        return a*exponent(a,b-1)
    }
    if (b<0) {
        return 1/(a*exponent(a,-b-1));
    }
} else {
    if (b>0) {

        return a*exponent(a,Math.trunc(b-1))+ Math.pow(a,b-Math.trunc(b))
    }
    else {
        return 1/(a*exponent(a,-b-1));
    }
}
}
console.log(exponent(4,0.5));