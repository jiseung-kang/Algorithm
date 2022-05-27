function solution(places) {
    var answer = [];
    
    function check(test) {
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {
                if (test[i][j] === 'P') {
                    // 대각선 \
                    if (j+1 < 5 && i+1 < 5 && test[i+1][j+1] === 'P') {
                        if (test[i][j+1] !== 'X' || test[i+1][j] !== 'X') return 0
                    }
                    // 대각선 /
                    if (i-1 >= 0 && j+1 < 5 && test[i-1][j+1] === 'P') {
                        if (test[i][j+1] !== 'X' || test[i-1][j] !== 'X') return 0
                    }
                    // 오른쪽 
                    if (j+1 < 5 && test[i][j+1] === 'P') return 0
                    if (j+1 < 5 && test[i][j+1] !== 'X') {
                        if (j+2 < 5 && test[i][j+2] === 'P') return 0
                    }
                    // 아래
                    if (i+1 < 5 && test[i+1][j] === 'P') return 0
                    if (i+1 < 5 && test[i+1][j] !== 'X') {
                        if (i+2 < 5 && test[i+2][j] === 'P') return 0
                    }
                }
            }
        }
        
        return 1
    }
    
    places.forEach(place => {
        answer.push(check(place))
    })
    
    return answer;
}