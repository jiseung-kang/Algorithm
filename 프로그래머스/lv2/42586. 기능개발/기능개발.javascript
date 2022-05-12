function solution(progresses, speeds) {
    var answer = [];
    let lastDeploy = Math.ceil((100-progresses[0])/speeds[0]);
    let count = 1;
    for(let i = 1; i < progresses.length; i++) {
        const [progress, speed] = [progresses[i], speeds[i]]
        const rest = Math.ceil((100-progress)/speed);
        if (rest > lastDeploy) {
            answer.push(count)   
            lastDeploy = rest
            count = 1
        }
        else {
            count += 1
        }
                    if (i === progresses.length - 1)
                answer.push(count)
    }
    
    return answer;
}