// 1) Написать рекурсивную функцию вычисления чисел Фибоначчи. На вход функции подавать длину конечного массива чисел.

function fibonacci(n) {
    let fib=[];
    if (n<=2) { 
        return [0,1].slice(0,n);
    } else {
        fib=fibonacci(n-1);    
        fib.push(fib[fib.length-1]+fib[fib.length-2])
        return fib;

}
}
fibonacci(10);