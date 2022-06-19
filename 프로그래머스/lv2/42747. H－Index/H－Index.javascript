function solution(citations) {
    let answer = 0;
    
    for(let i = 1; i < Math.max(...citations) + 1; i++) {
        let h = 0;
        citations.forEach(c => {
             if (c >= i) {
                 h++;
             }
         })
        if (h >= i && i > answer) answer = i;
    }
    
    return answer;
}