function solution(bridge_length, weight, truck_weights) {
    let answer = 0
	let queue = Array.from({length: bridge_length}, () => 0);
    
    while (truck_weights.length > 0) {
        answer++;
        queue.shift()
        if (queue.reduce((acc, cur) => acc + cur, 0) + truck_weights[0] <= weight) {
            queue.push(truck_weights.shift())
        }
        else {
            queue.push(0)
        }
    }
	
    while (queue.reduce((acc, cur) => acc + cur, 0)) {
        queue.shift();
        answer++;
    }

	return answer
}