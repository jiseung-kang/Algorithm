/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = []
	if (nums.length < 3) return results
	nums = nums.sort((a, b) => a - b)

	let target = 0

	for (let cur = 0; cur < nums.length - 2; cur++) {
        let left = cur + 1
        let right = nums.length - 1
		if (nums[cur] > target) break
		if (cur > 0 && nums[cur] === nums[cur - 1]) continue

		while (left < right) {
			let sum = nums[cur] + nums[left] + nums[right]

			if (sum === target) {
				results.push([nums[cur], nums[left], nums[right]])

				while (nums[left] === nums[left + 1]) left++
				while (nums[right] === nums[right - 1]) right--
				left++
				right--

			} else if (sum < target) {
				left++

			} else { 
				right--
			}
		}
	}

	return results
};