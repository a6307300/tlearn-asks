//2. Написать приложение, получающее массив с вложенными массивами и возвращающее его “плоскую” версию. Встроенный метод массивов flat использовать нельзя.
//Например: [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
let res;
function flatteringTwo(arr) {
    res=[];
res=arr.reduce((res,item) => res.concat(Array.isArray(item)? flatteringTwo(item) : item), []);
return res;
}
flatteringTwo(arr);
console.log(res);

