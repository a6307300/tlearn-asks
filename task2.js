//2. Написать приложение, получающее массив с вложенными массивами и возвращающее его “плоскую” версию. Встроенный метод массивов flat использовать нельзя.
//Например: [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
function flatteringTwo(arr,dip=Infinity) {
    let res=[];
res=arr.reduce((res,item) => res.concat(Array.isArray(item) ? flatteringTwo(item, dip - 1) : item), []);
console.log (res);
return res;
}
flatteringTwo(arr);


// function flatteringOne(arr) {
//     return arr.flat(Infinity);
// }
// flattering([1,2,3,[3,5,6],[[1,2,3,6]]],);

// let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// function flatteringTwo(arr, dip=Infinity) {
//     let res=[];
//     //if(dip > 0) {
// return arr.reduce((res,item) => res.concat(Array.isArray(item) ? flatteringTwo(item, dip - 1) : item), []);
//     //} else {
//     //    return arr.slice();
//     //}
// }
// flatteringTwo(arr);

