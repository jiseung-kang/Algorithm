function solution(N, number) {
    let answer = -1;
    
    if (N === number) {
        return 1;
    }
    
    const arr = Array.from({length: 9}, () => new Set())
    
    for (let i = 1; i < 9; i++) {
        arr[i].add(Number(String(N).repeat(i)))
        
        for (let right = 0; right < i; right++) {
            let left = i - right
            arr[left].forEach(l => {
                arr[right].forEach(r => {
                    arr[i].add(l + r)
                    arr[i].add(l - r)
                    arr[i].add(l * r)
                    arr[i].add(parseInt(l / r))
                })
            })
            
        }
        
        if (arr[i].has(number)) {
            answer = i
            break
        }
    }
    
    return answer > 8 ? -1 : answer;
}