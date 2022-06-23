const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(i => i.split(' ').map(Number));

function solution(input) {
  const cases = [input[0], input[1], input[2], input[3]]
  const matches = []

  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 6; j++) {
      matches.push([i, j]);
    }
  }

  const answer = [] 
  const teams = Array.from({length: 6}, () => [0, 0, 0]);


  const isPossible = (n) => {
    if (n === 15) {
      for(let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
          if (teams[i][j] !== 0) return 0;
        }
      }
      return 1;
    }

    for (let i = 0; i < 3; i++) {
      if (!teams[matches[n][0]][i] || !teams[matches[n][1]][2-i]) continue;
      teams[matches[n][0]][i] -= 1;
      teams[matches[n][1]][2-i] -= 1;

      if (isPossible(n+1)) return 1;

      teams[matches[n][0]][i] += 1;
      teams[matches[n][1]][2-i] += 1;
    }

    return 0;
  }

  for (let i = 0; i < 4; i++) {
    for(let j = 0; j < 18; j++) {
      teams[Math.floor(j/3)][j%3] = cases[i][j]
    }
    answer.push(isPossible(0));
  }

  console.log(answer.join(' '))
}

solution(input)
