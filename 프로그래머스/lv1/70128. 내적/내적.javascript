function solution(a, b) {
    let answer = 0;
    let l = a.length
    
    for(let i = 0; i<l; i++) {
        answer += a[i]*b[i]
    }
    return answer;
}