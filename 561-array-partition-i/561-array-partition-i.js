/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let answer = 0
    nums.sort((a, b) => Number(a) - Number(b))
    for(let i = 0; i < nums.length; i += 2) {
        answer += Math.min(nums[i], nums[i+1])
    }
    return answer
};