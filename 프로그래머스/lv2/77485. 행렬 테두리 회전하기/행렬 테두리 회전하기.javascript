function solution(rows, columns, queries) {
    let answer = [];
    let board = Array.from({length: rows}, () => Array(columns).fill(0))
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            board[i][j] = (i * columns) + j + 1;
        }
    }
    
    function rotate(query) {
        let [x1, y1, x2, y2] = query
        x1 -= 1;
        y1 -= 1;
        x2 -= 1;
        y2 -= 1;
        
        const tmp = board[x1][y1]
        let min = tmp;
        
        for (let i = x1; i < x2; i++) {
            board[i][y1] = board[i+1][y1];
            min = Math.min(min, board[i+1][y1]);
        }
        for (let i = y1; i < y2; i++) {
            board[x2][i] = board[x2][i+1]; 
            min = Math.min(min, board[x2][i+1]);
            
        }
        for (let i = x2; i > x1; i--) {
            board[i][y2] = board[i-1][y2]; 
            min = Math.min(min, board[i-1][y2]);
        }
        for (let i = y2; i > y1; i--) {
            board[x1][i] = board[x1][i-1]; 
            min = Math.min(min, board[x1][i-1]);
        }
        
        board[x1][y1 + 1] = tmp;
        return min;
    }
    
    queries.forEach(query => {
        answer.push(rotate(query));
    })
    
    return answer;
}