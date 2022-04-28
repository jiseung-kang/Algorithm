function solution(board, skill) {
    var answer = 0;
    
    var tmp = Array.from({ length: board.length + 1 }, () =>
        Array(board[0].length + 1).fill(0)
    );
    
    skill.forEach((s) => {
        var[type, r1, c1, r2, c2, degree] = s;
        tmp[r1][c1] += type === 1 ? -degree : degree;
        tmp[r1][c2 + 1] += type === 1 ? degree : -degree;
        tmp[r2 + 1][c1] += type === 1 ? degree : -degree;
        tmp[r2 + 1][c2 + 1] += type === 1 ? -degree : degree;
    })
    
    var row = board.length
    var col = board[0].length
    
    for(let i = 0; i < row; i++){
        for(let j = 1; j < col; j++){
            tmp[i][j] += tmp[i][j-1];
        }
    }
    
    for(let i = 0; i < col; i++){
        for(let j = 1; j < row; j++){
            tmp[j][i] += tmp[j-1][i];
        }
    }
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(board[i][j] + tmp[i][j] > 0){
                answer++;
            }
        }
    }
    
    return answer;
}