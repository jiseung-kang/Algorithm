- 단순히 두 수를 더했을 때 target이면 리턴한다.
```
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        print(nums, target)
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i]+nums[j] == target:
                    return [i,j]
```
