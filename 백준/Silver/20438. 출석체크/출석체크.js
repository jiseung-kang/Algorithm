const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(i => i.split(' ').map(Number));

function solution(input) {
  let answer = "";
  const [N, K, Q, M] = input[0];
  const students = Array.from({length: N}, () => 1);
  const sleeps = input[1];
  const receiveds = input[2].filter(student => !sleeps.includes(student));

  for (let i = 0; i < receiveds.length; i++) {
    let j = 1;
    while (receiveds[i] * j - 3 < students.length) {
      if (!sleeps.includes(receiveds[i] * j))
        students[receiveds[i] * j - 3] = 0
      j++
    }
  }

  
  for (let i = 0; i < M; i++) {
    const [S, E] = input[3+i]
    let count = 0;
    for (let j = S-3; j < E-2; j++) {
      count += parseInt(students[j])
    }
    answer += String(count)
    if(i < M - 1) answer += '\n'
  }
  console.log(answer)
}

solution(input)