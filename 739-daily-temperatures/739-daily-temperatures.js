/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const answer = Array.from({length: temperatures.length}, () => 0)
    for(let i = 0; i < temperatures.length; i++) {
        let count = 1;
        for (let j = i+1; j < temperatures.length; j++) {
            if (temperatures[i] < temperatures[j]) {
                answer[i] = count;
                break;
            }
            else count++;
        }
    }
    return answer
};