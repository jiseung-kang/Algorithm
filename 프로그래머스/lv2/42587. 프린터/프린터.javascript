function solution(priorities, location) {
    let stack = [];
    
    priorities.forEach((p, i) => {
        priorities[i] = [p, i]
    })
    
    while(priorities.length > 0) {
        let tmp = priorities[0];
        priorities = priorities.splice(1, priorities.length)
        stack.push(tmp)
        
        for (let i = 0; i < priorities.length; i++) {
            if (priorities[i][0] > tmp[0]) {
                priorities.push(tmp)
                stack.pop()
                break
            }
        }
    }
    for (let i = 0; i < stack.length; i++) {
        if (stack[i][1] === location) {
            return i+1
        }
    }
}