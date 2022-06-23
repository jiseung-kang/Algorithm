const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(i => i.split(' ').map(Number));

function solution(input) {
  const n = input[0][0];
  let a = input[1];
  a.sort((a, b) => a - b);
  let answer = 0;

  const getCnt = (idx, chk) => {
    let result = 1;
    if (chk) {
      for (let i = idx; i < n; i++) {
        if (a[i] != a[i + 1]) return result;
        result++;
      }
    }
    else {
      for (let i = idx; i > 0; i--) {
        if (a[i] != a[i - 1]) return result;
        result++;
      }
    }
    return result;
  };

  const find = (idx) => {
    let left = idx + 1;
    let right = n - 1;

    while (left < right) {
      let sum = a[idx];

      if (a[left] + a[right] + sum > 0) right--;
      else if (a[left] + a[right] + sum < 0) left++;
      else {
        if (a[left] === a[right]) {
          answer += ((right - left + 1) * (right - left)) / 2;
          break;
        } 
        else {
          let leftCnt = getCnt(left, 1);
          let rightCnt = getCnt(right, 0);
          answer += leftCnt * rightCnt;
          left += leftCnt;
          right -= rightCnt;
        }
      }
    }
  };

  for(let i = 0; i < n; i++) find(i);

  console.log(answer);
}

solution(input)
