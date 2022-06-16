const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(i => i.split(' ').map(Number));

function solution(input) {
  let [col, row, calc] = input[0];
  let arr = [];
  for(let i = 1; i < col + 1; i++) {
    arr.push(input[i])
  }
  const calcs = input[col+1];

  const vertical = () => {
    col = arr.length
    for(let i = 0; i < col / 2; i++) {
      let tmp = arr[i];
      arr[i] = arr[col-i-1];
      arr[col-i-1] = tmp
    }
  }

  const horizon = () => {
    row = arr[0].length;
    col = arr.length;

    for(let i = 0; i < col; i++) {
      for(let j = 0; j < row / 2; j++) {
        let tmp = arr[i][j];
        arr[i][j] = arr[i][row-j-1];
        arr[i][row-j-1] = tmp
      }
    } 
  }

  const rotate = () => {
    row = arr[0].length;
    col = arr.length;
    
    const newArr = Array.from({length: row}, () => Array.from({length: col}, () => 0));

    for(let i = 0; i < row; i++) {
      for(let j = 0; j < col; j++) {
        newArr[i][j] = arr[j][i]
      }
    }

    arr = newArr
  }

  const rotateR = () => {
    rotate();
    horizon();
  }

  const rotateL = () => {
    rotate();
    vertical();
  }

  const partR = () => {
    row = arr[0].length;
    col = arr.length;

    const newArr = Array.from({length: col}, () => Array.from({length: row}, () => 0));

    for(let i = 0; i < col; i++) {
      for(let j = 0; j < row; j++) {
        // 1
        if (i < col/2 && j < row/2) {
          newArr[i][j] = arr[i+col/2][j]
        }
        // 2
        else if (i < col/2 && j >= row/2) {
          newArr[i][j] = arr[i][j - row/2]
        }
        // 3
        else if (i >= col/2 && j >= row/2) {
          newArr[i][j] = arr[i-col/2][j]
        }
        // 4
        else {
          newArr[i][j] = arr[i][j+row/2]
        }
      }
    }

    arr = newArr;
  }

  const partL = () => {
    row = arr[0].length;
    col = arr.length;

    const newArr = Array.from({length: col}, () => Array.from({length: row}, () => 0));

    for(let i = 0; i < col; i++) {
      for(let j = 0; j < row; j++) {
        // 1
        if (i < col/2 && j < row/2) {
          newArr[i][j] = arr[i][j+row/2]
        }
        // 2
        else if (i < col/2 && j >= row/2) {
          newArr[i][j] = arr[i+col/2][j]
        }
        // 3
        else if (i >= col/2 && j >= row/2) {
          newArr[i][j] = arr[i][j-row/2]
        }
        // 4
        else {
          newArr[i][j] = arr[i-col/2][j]
        }
      }
    }

    arr = newArr;
  }

  calcs.forEach(c => {
    switch(c) {
      case 1:
        vertical();
        break;
      case 2:
        horizon();
        break;
      case 3:
        rotateR();
        break;
      case 4:
        rotateL();
        break;
      case 5:
        partR();
        break;
      case 6:
        partL();
        break;
      default:
        break;
    }
  })

  arr.forEach(a => {
    console.log(a.join(' '))
  })
}

solution(input)