/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let answer = 0;
    
    let left = [...height]
    let right = [...height]
    const len = height.length
    
    for (let i = 0; i < len - 1; i++) {
        if (left[i] > left[i+1]) left[i+1] = left[i]
        if (right[len-i-1] > right[len-i-2]) right[len-i-2] = right[len-i-1]
    }
    
    for (let i = 0; i < len; i++) {
        answer += Math.min(left[i], right[i]) - height[i]
    }
    
    return answer;
};