function solution(board, aloc, bloc) {
    var answer = -1;
    var dr = [[-1,0], [1,0], [0,-1],[0,1]];
    const MAX = 9999;
    
    function canMove(r, c, board) {
        if (0 <= r && r < board.length && 0 <= c && c < board[0].length && board[r][c] === 1) {
            return true;
        }
        return false;
    }
    
    function playGame(board, loc, turn) {
        var nextLoc = [[], []];
        var minT = MAX;
        var maxT = 0;
        
        if (board[loc[turn % 2][0]][loc[turn % 2][1]] === 0) 
            return [(turn + 1) % 2, turn]
        
        for (var i = 0; i < 4; i++) {
            var nxtR = loc[turn%2][0] + dr[i][0]
            var nxtC = loc[turn%2][1] + dr[i][1]
            nextLoc[turn % 2] = [nxtR, nxtC]
            nextLoc[(turn + 1) % 2] = loc[(turn + 1) % 2]
            if (canMove(nxtR, nxtC, board)) {
                board[loc[turn % 2][0]][loc[turn % 2][1]] = 0
                var ret = playGame(board, nextLoc, turn + 1)
                board[loc[turn % 2][0]][loc[turn % 2][1]] = 1

                if (ret && ret[0] != (turn % 2))
                    maxT = Math.max(maxT, ret[1])
                else if (ret)
                    minT = Math.min(minT, ret[1])
            }
        }
        
        
        if (maxT === 0 && minT === MAX)
            return [(turn + 1) % 2, turn]
        else if (minT !== MAX) 
            return [turn % 2, minT]
        else 
            return [(turn + 1) % 2, maxT]
    }
    
    answer = playGame(board, [aloc, bloc], 0)
    return answer[1]
}