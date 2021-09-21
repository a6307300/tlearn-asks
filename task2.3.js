let matrix;
function createMatrix(number) {
  matrix = [];
  //let rows= [];
  for (let i = 0; i < number; i++) {
    let rows = [];
    for (let j = 0; j < number; j++) {
      rows.push(1);
    }
    matrix.push(rows);
  }
  //console.log(matrix);
  //return matrix;
}

function fillMatrix(matrix, number) {
  let numbers = 1;

  let rowStart = 0;
  let colStart = 0;
  let rowEnd = number - 1;
  let colEnd = number - 1;

  do {
    //направо
    for (let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = numbers;
      numbers++;
    }
    rowStart++;
    //вниз
    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = numbers;
      numbers++;
    }
    colEnd--;
    //влево
    if (rowStart < rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        matrix[rowEnd][i] = numbers;
        numbers++;
      }
      rowEnd--;
    }
    //вверх
    if (rowStart < rowEnd) {
      for (let i = colEnd; i > colStart; i--) {
        matrix[i][colStart] = numbers;
        numbers++;
      }
      colStart++;
    }
  } while (rowStart <= rowEnd && colStart <= colEnd);

  return matrix;
}

function combination(number) {
  createMatrix(number);
  fillMatrix(matrix, number);
  console.log(fillMatrix(matrix));
}
combination(8);




// let firstRow=[];
//let matrix = [];

// function createRow(n) {
//     let counter=1;
// for (let i=1; i<n; i++) {
//         matrix[1][i]=counter;
//         counter++
// }
// }

// function createMatrix (x,y) {
//         matrix = [];
//         item=[];
//         for (var i = 0; i <=x; i++) {
//             matrix[i] = Array(y);
//         }
//         console.log(matrix)
//         return matrix;

//     }

//     for (let j=1; j<=n*n; j++) {
//     for (let i=j; i<j+n; i++) {
//         newRow.push(i);
//     }
//     row=newRow;
//     newRow=[];
//     console.log (row);
//     j=row[row.length-1];
// }

//createRow(4);
//matrix[1][1]=1;
//console.log(matrix);
//createMatrix(3,3);
