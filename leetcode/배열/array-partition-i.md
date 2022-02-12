* 정렬한 배열의 짝수번째 값이 partition들의 min에 해당한다.
* 그리고 이것이 partition들의 min값의 합에 대한 최댓값이다.
```
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        return sum(nums[0:len(nums):2])
```
