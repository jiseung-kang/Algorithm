/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    for(let i = 0; i < s.length; i++) {
        const c = s[i]
        if (c === "(" || c === "{" || c === "[") stack.push(c)
        else{
            if(stack.length === 0) return false
            const cur = stack.pop()
            if (c === ")" && cur === "(" || c === "}" && cur === "{" || c === "]" && cur === "[" ) continue
            return false
        }
    }
    return stack.length === 0
};