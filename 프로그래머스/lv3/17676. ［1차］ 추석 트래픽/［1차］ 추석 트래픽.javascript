function solution(lines) {
    let answer = 0;
    const times = []
    const checkpoints = [];
    
    lines.forEach((line) => {
        let [date, time, second] = line.split(' ')
        let [h, m, s] = time.split(':')
        second = second.replace('s', '')
        end = Number(h)*60*60 + Number(m)*60 + Number(s)
        start = Number(end) - Number(second) + 0.001
        times.push([start, end])
        checkpoints.push(start)
        checkpoints.push(end)
    })
    
    checkpoints.sort();
    
    checkpoints.forEach((checkpoint) => {
        let tmp = 0
        const start = checkpoint;
        const end = checkpoint + 1;
        times.forEach((time)=> {
            if ((start <= time[0] &&  end > time[0]) || (start <= time[1] && end > time[1]) || (time[0] <= start && end <= time[1])) {
                tmp += 1                
            }
        })
        if (tmp > answer) {
            answer = tmp
        }
    })
    
    return answer;
}