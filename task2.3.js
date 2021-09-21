var row=[1];
var newRow=[];
function createRow(n) {
    for (let j=1; j<=n*n; j++) {
    for (let i=j; i<j+n; i++) {
        newRow.push(i);
    }
    row=newRow;
    newRow=[];
    console.log (row);
    j=row[row.length-1];
}
}
createRow(4);