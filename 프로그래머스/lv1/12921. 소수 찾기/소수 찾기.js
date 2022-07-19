function solution(n) {
    let answer = 0;
    
    const era = Array.from({length: n + 1}, () => 0);
    
    for(let i = 2; i < n + 1; i++) {
        if (era[i] === 0) {
            answer++;
            let tmp = 1;
            while (true) {
                if (i * tmp > n) break;
                era[i * tmp++] = 1;
            }
        }
    }
    
    return answer;
}