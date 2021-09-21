// 3. Требуется создать функцию, получающую на вход число от 0 до 100 000 и показывающее его текстовый эквивалент.

// Например: 441 => четыреста сорок один

var num=[];
var words=[];
var word;

function splitting (numb) {
    console.log(numb)
 number=Number(numb).toString();
 num = number.split('');
 for (let i=0; i<num.length;i++) {
     if (num[0]==0&&i!=num.length-1) {
         num.shift();
     } 
    }
console.log(num);
for (let i = 0; i<num.length ;i++) {
    if (num[i]==9 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('девять');};
    if (num[i]==9 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('девянадцать');};
    if (num[i]==9 && (i==num.length-5||i==num.length-2)) { words.push('девяносто');};
    if (num[i]==9 && i==num.length-3) { words.push('девятьсот');};

    if (num[i]==8 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('восемь');};
    if (num[i]==8 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('восемнадцать');};
    if (num[i]==8 && (i==num.length-5||i==num.length-2)) { words.push('восемдесят');};
    if (num[i]==8 && i==num.length-3) { words.push('восемьсот');};

    if (num[i]==7 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('семь');};
    if (num[i]==7 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('семнадцать');};
    if (num[i]==7 && (i==num.length-5||i==num.length-2)) { words.push('семьдесят');};
    if (num[i]==7 && i==num.length-3) { words.push('семьсот');};

    if (num[i]==6 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('шесть');};
    if (num[i]==6 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('шестнадцать');};
    if (num[i]==6 && (i==num.length-5||i==num.length-2)) { words.push('шестьдесят');};
    if (num[i]==6 && i==num.length-3) { words.push('шестьсот');};
    
    if (num[i]==5 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('пять');};
    if (num[i]==5 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('пятнадцать');};
    if (num[i]==5 && (i==num.length-5||i==num.length-2)) { words.push('пятьдесят');};
    if (num[i]==5 && i==num.length-3) { words.push('пятьсот');};

    if (num[i]==4 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('четыре');};
    if (num[i]==4 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('четырнадцать');};
    if (num[i]==4 && (i==num.length-5||i==num.length-2)) { words.push('сорок');};
    if (num[i]==4 && i==num.length-3) { words.push('четыреста');};


    if (num[i]==3 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('три');};
    if (num[i]==3 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('тринадцать');};
    if (num[i]==3 && (i==num.length-5||i==num.length-2)) { words.push('тридцать');};
    if (num[i]==3 && i==num.length-3) { words.push('триста');};


    if (num[i]==2 && num[i-1]!=1 && i==num.length-1) { words.push('два');};
    if (num[i]==2 && num[i-1]!=1 && i==num.length-4) { words.push('две');}
    if (num[i]==2 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('двенадцать');};
    if (num[i]==2 && (i==num.length-5||i==num.length-2)) { words.push('двадцать');};
    if (num[i]==2 && i==num.length-3) { words.push('двести');};


    if (num[i]==1 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('один');};
    if (num[i]==1 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('одиннадцать');};
    if (num[i]==1 && num[i+1]==0 && (i==num.length-5||i==num.length-2)) { words.push('десять');};
    if (num[i]==1 && (i==num.length-5||i==num.length-2)) { words.push('');};
    if (num[i]==1 && i==num.length-3) { words.push('сто');};

    if (num[i]==0 && num.length==1) { words.push('nol');};

}
if (num.length==5) {
    if ((num[1]!=2&&num[1]!=3&&num[1]!=4&&num[1]!=0)||num[0]==1){
    word=`${words[0]} ${words[1]} тысяч ${words[2]||''} ${words[3]||''} ${words[4]||''}`
}
if ((num[1]!=2&&num[1]!=3&&num[1]!=4&&num[1]==0)||num[0]==1){
    word=`${words[0]} тысяч ${words[1]||''} ${words[2]||''} ${words[3]||''} ${words[4]||''}`
}
if (num[1]==1 && num[0]!=1){
    word=`${words[0]} одна тысяча ${words[2]||''} ${words[3]||''} ${words[4]||''}`
    
}
// if (num[1]==1 && num[0]==1){
//     word=`одиннадцать тысяч ${words[2]||''} ${words[3]||''} ${words[4]||''}`   
// }

if (num[0]==1 && (num[1]>0&&num[1]<=9) ){
    word=`${words[1]} тысяч ${words[2]||''} ${words[3]||''} ${words[4]||''}`
}
if ((num[1]==2||num[1]==3||num[1]==4)&&num[0]!=1){
    word=`${words[0]} ${words[1]} тысячи ${words[2]||''} ${words[3]||''} ${words[4]||''}`
}
}
if (num.length==4) {
    if (num[0]!=1&&num[0]!=2&&num[0]!=3&&num[0]!=4){
    word=`${words[0]} тысяч ${words[1]||''} ${words[2]||''} ${words[3]||''}`
}
if (num[0]==1){
    word=`одна тысяча ${words[1]||''} ${words[2]||''} ${words[3]||''}`
}
if (num[0]==2||num[0]==3||num[0]==4){
    word=`${words[0]} тысячи ${words[1]||''} ${words[2]||''} ${words[3]||''}`
}
}
if (num.length==3) {
    word=`${words[0]||''} ${words[1]||''} ${words[2]||''}`
}
if (num.length==2) {
    word=`${words[0]||''} ${words[1]||''}`
}
if (num.length==1) {
    word=`${words[0]}`
}
if (num.length==6) {
    word=`сто тысяч`
}

console.log(word);
}
// }

splitting('21');