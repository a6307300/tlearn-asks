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
    if (num[i]==9 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('devyat');};
    if (num[i]==9 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('devyatnadcat');};
    if (num[i]==9 && (i==num.length-5||i==num.length-2)) { words.push('devyanosto');};
    if (num[i]==9 && i==num.length-3) { words.push('devyatsot');};

    if (num[i]==8 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('vosem');};
    if (num[i]==8 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('vosemnadcat');};
    if (num[i]==8 && (i==num.length-5||i==num.length-2)) { words.push('vosemdesyat');};
    if (num[i]==8 && i==num.length-3) { words.push('vosemsot');};

    if (num[i]==7 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('sem');};
    if (num[i]==7 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('semnadcat');};
    if (num[i]==7 && (i==num.length-5||i==num.length-2)) { words.push('semdesyat');};
    if (num[i]==7 && i==num.length-3) { words.push('semsot');};

    if (num[i]==6 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('shest');};
    if (num[i]==6 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('shestnadcat');};
    if (num[i]==6 && (i==num.length-5||i==num.length-2)) { words.push('shestdesyat');};
    if (num[i]==6 && i==num.length-3) { words.push('shestsot');};
    
    if (num[i]==5 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('pyat');};
    if (num[i]==5 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('pyatnadcat');};
    if (num[i]==5 && (i==num.length-5||i==num.length-2)) { words.push('pyatdesyat');};
    if (num[i]==5 && i==num.length-3) { words.push('pyatsot');};

    if (num[i]==4 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('chetyre');};
    if (num[i]==4 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('chetyrnadcat');};
    if (num[i]==4 && (i==num.length-5||i==num.length-2)) { words.push('sorok');};
    if (num[i]==4 && i==num.length-3) { words.push('chetyresta');};


    if (num[i]==3 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('tri');};
    if (num[i]==3 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('trinadcat');};
    if (num[i]==3 && (i==num.length-5||i==num.length-2)) { words.push('tridcat');};
    if (num[i]==3 && i==num.length-3) { words.push('trista');};


    if (num[i]==2 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('dva');};
    if (num[i]==2 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('dvenadcat');};
    if (num[i]==2 && (i==num.length-5||i==num.length-2)) { words.push('dvadcat');};
    if (num[i]==2 && i==num.length-3) { words.push('dvesty');};


    if (num[i]==1 && num[i-1]!=1 && (i==num.length-4||i==num.length-1)) { words.push('odin');};
    if (num[i]==1 && num[i-1]==1 && (i==num.length-4||i==num.length-1)) { words.push('odinnadcat');};
    if (num[i]==1 && num[i+1]==0 && (i==num.length-5||i==num.length-2)) { words.push('desyat');};
    if (num[i]==1 && (i==num.length-5||i==num.length-2)) { words.push('');};
    if (num[i]==1 && i==num.length-3) { words.push('sto');};

    if (num[i]==0 && num.length==1) { words.push('nol');};

}
if (num.length==5) {
    if (num[1]!=1&&num[1]!=2&&num[1]!=3&&num[1]!=4){
    word=`${words[0]} ${words[1]} tysyach ${words[2]||''} ${words[3]||''} ${words[4]||''}`
}
if (num[1]==1){
    word=`${words[0]} odna tysyacha ${words[2]||''} ${words[3]||''} ${words[4]||''}`
}
if (num[1]==2||num[1]==3||num[1]==4){
    word=`${words[0]} ${words[1]}  tysyachi ${words[2]||''} ${words[3]||''} ${words[4]||''}`
}
}

if (num.length==4) {
    if (num[0]!=1&&num[0]!=2&&num[0]!=3&&num[0]!=4){
    word=`${words[0]} tysyach ${words[1]||''} ${words[2]||''} ${words[3]||''}`
}
if (num[0]==1){
    word=`odna tysyacha ${words[1]||''} ${words[2]||''} ${words[3]||''}`
}
if (num[0]==2||num[0]==3||num[0]==4){
    word=`${words[0]} tysyachi ${words[1]||''} ${words[2]||''} ${words[3]||''}`
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

console.log(word);
}
// }

splitting('441');