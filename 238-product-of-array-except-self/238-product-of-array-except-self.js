/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let count0 = 0
    let index0 = -1
    let result = 1;
    const answer = Array.from({length: nums.length}, () => 0)
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count0++;
            index0 = i;
        }
        else result *= nums[i] 
            
        if (count0 > 1) return answer;
    }
    
    if (count0) {
        answer[index0] = result
        return answer
    }
    
    return nums.map(i => result/i)
};