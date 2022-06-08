function solution(name) {
    let answer = 0;
    let result = "A".repeat(name.length)
    
    for(let i = 0; i < name.length; i++) {
        if (name.charCodeAt(i) > 77.5) answer += (91 - name.charCodeAt(i))
        else answer += (name.charCodeAt(i) - 65)
    }
    
    const count = []
    
    for (let i = 0; i < name.length; i++) {
        let j = i + 1;
        while (j < name.length && name[j] === 'A') j++;
        
        const [leftSide, rightSide] = [i, name.length - j]
        count.push(leftSide * 2 + rightSide)
        count.push(rightSide * 2 + leftSide)
    }

    return answer + Math.min(...count)
}