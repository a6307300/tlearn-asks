var row=[1];
var newRow=[];
function createRow(n) {
    for (let j=0; j<n*n; j++) {
    for (let i=1+j; i<=j+n; i++) {
        newRow.push(i);
    }
    row=newRow;
    newRow=[];
    console.log (row);
    j=row[row.length-1];
    
    // if (newRow[newRow.length-1]<n*n) {
    //     createRow(n);
    // }
}
}
createRow(4);