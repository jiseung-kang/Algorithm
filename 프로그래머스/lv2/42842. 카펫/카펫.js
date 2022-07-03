function solution(brown, yellow) {
    const answer = [0, 0]

	let wh = brown + yellow;
	for (let i = 3; i < wh/2; i++) {
        if (wh%i === 0) {
            if((wh/i - 2) * (i-2) !== yellow) continue;
            answer[0] = wh/i;
            answer[1] = i;
        }
    }
    
    answer.sort((a, b) => b - a);
	
	return answer;
}