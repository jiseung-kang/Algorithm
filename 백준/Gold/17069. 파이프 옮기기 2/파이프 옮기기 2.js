const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(i => i.split(' ').map(Number));

function solution(input) {
  const N = input[0]
  const house = [];
  for (let i = 0; i < N; i++) {
    house.push(input[i+1]);
  }

  const dp = Array.from({length: N}, () => Array.from({length: N}, () => [0, 0, 0]));
  for (let i = 1; i < N; i++) {
    if (house[0][i] === 1) break;
    dp[0][i][0] = 1;
  }

  for (let i = 1; i < N; i++) {
    for (let j = 1; j < N; j++) {
      if (house[i][j] === 1) continue;
      dp[i][j][0] = dp[i][j-1][0] + dp[i][j-1][2]
      dp[i][j][1] = dp[i-1][j][1] + dp[i-1][j][2]
      if (house[i-1][j] !== 1 && house[i][j-1] !== 1) {
        dp[i][j][2] = dp[i-1][j-1][0] + dp[i-1][j-1][1] + dp[i-1][j-1][2]
      }
    }
  }

  console.log(dp[N-1][N-1][0] + dp[N-1][N-1][1] + dp[N-1][N-1][2]);
}

solution(input)
