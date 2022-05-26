function check(p) {
    let stack = [];
    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') 
            stack.push(p[i])
        else {
            stack.pop();
        }
    }
    return stack.length === 0;
}

function solution(p) {
    let answer = '';
    let open = 0;
    let close = 0;
    
    if (p === '') 
        return ''; 
    
    for (let i = 0;  i < p.length; i++) {
        if (p[i] === '(') open++
        else close++
        
        if (open === close) {
            let u = p.slice(0, i+1)
            let v = p.slice(i+1)
            if (check(u)) {
                answer = u + solution(v);
                return answer;
            } else {
                answer = '(' + solution(v) + ')';
                for (let j = 1; j < i; j++) {
                    if (p[j] === '(') answer = answer + ')'
                    else answer = answer + '('
                }
                return answer;
            }
        }
    }    
}
