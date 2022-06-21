const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(i => i.split(' ').map(Number));

function solution(input) {
  const [n, w, L] = input[0];
  const a = input[1];
  const bridge = Array.from({length: w}, () => 0);

  let answer = 0;
  
  while (bridge.length || a.length) {
    bridge.shift();
    answer++;
    if (a.length) {
      if (bridge.reduce((prev, cur) => prev + cur, 0) + a[0] <= L) bridge.push(a.shift());
      else bridge.push(0)
    }
  }

  console.log(answer)
}

solution(input)