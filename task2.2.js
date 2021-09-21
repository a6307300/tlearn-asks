//2)  Функция. Принимает массив строк. Должна вернуть массив результатов проверки двух
// строк. Если у одной строки с последующей первый и последний символы, то true.
// Например ["asd", "afffd","cc", "kk"]. Для такого массива функция должна вернуть
// [true, false, false]

function concat(arr) {
    let arr1 = arr.map(item => item[0]);
    let arr2 = arr.map(item => item.slice(-1));
    let res = [];
    for (let i = 0; i < arr1.length - 1; i++) {
        if (arr1[i] == arr1[i + 1] && arr2[i] == arr2[i + 1]) res.push(true); else res.push(false);
    };
    console.log(res);
}
concat(["asd", "afffd", "cc", "kk"]);