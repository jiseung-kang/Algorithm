function solution(s) {
    var answer = 0;
    
    const isRight = (str) => {
        const stack = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "(" || str[i] === "{" || str[i] === "[") stack.push(str[i]);
            else {
                if(stack.length === 0) return false;
                const pop = stack.pop();
                if (pop === "(" && str[i] !== ")") return false;
                if (pop === "{" && str[i] !== "}") return false;
                if (pop === "[" && str[i] !== "]") return false;
            }
        }
        return stack.length === 0;
    }
    
    for (let i = 0; i < s.length; i++) {
        const newStr = s.substring(i, s.length) + s.substring(0, i);
        answer += isRight(newStr)
    }
    
    
    
    return answer;
}