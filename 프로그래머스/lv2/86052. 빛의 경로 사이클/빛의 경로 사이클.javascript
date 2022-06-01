function solution(grid) {
    const answer = [];
    const row = grid.length;
    const column = grid[0].length;
    const visited = Array.from({length: row}, () => Array.from({length: column}, () => [0, 0, 0, 0])); 

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    const nextDir = [
        [0, 3, 2], // 상 S L R
        [1, 2, 3], // 하 S L R
        [2, 0, 1], // 좌 S L R
        [3, 1, 0], // 우 S L R
    ];
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            for (let k = 0; k < 4; k++) {
                if (visited[i][j][k]) continue;
                
                let x = i;
                let y = j;
                let dir = k;
                let tmp = 0;
                
                while (!visited[x][y][dir]) {
                    tmp++;
                    visited[x][y][dir] = 1;
                    
                    if (grid[x][y] === "S") dir = nextDir[dir][0]
                    else if (grid[x][y] === "L") dir = nextDir[dir][1]
                    else dir = nextDir[dir][2]
                    
                    x += dx[dir];
                    y += dy[dir];
                    x = x === row ? 0 : x < 0 ? row - 1 : x;
                    y = y === column ? 0 : y < 0 ? column - 1 : y;
                }
                answer.push(tmp);
            }
        }
    }
    
    return answer.sort((a, b) => a - b);
}