function solution(record) {
    var answer = [];
    let users = {};
    let result = [];

    for (const iterator of record) {
        const [state, id, nick] = iterator.split(' ');
        if (state === 'Enter'){
            users[id] = nick;
            result.push([id, '님이 들어왔습니다.']);
        } else if (state === 'Leave'){
            result.push([id, '님이 나갔습니다.']);
        } else if (state === 'Change'){
            users[id] = nick;
        }
    }
    
    for (const [id, msg] of result) {
        answer.push(users[id] + msg)
    }
    
    return answer;
}