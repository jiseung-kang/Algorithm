* 왼쪽에서 누적곱, 오른쪽에서 누적곱을 담은 배열을 구한다.
* 해당 인덱스의 왼쪽 누적곱과 오른쪽 누적곱을 곱해서 자신을 제외한 나머지의 누적곱을 구한다.
```
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        ans = [1 for i in range(len(nums))]
        left = [1 for i in range(len(nums))]
        left[0] = nums[0]
        for i in range(1, len(nums)):
            left[i] = left[i-1] * nums[i]
        right = [1 for i in range(len(nums))]
        right[len(nums)-1] = nums[len(nums)-1]
        for i in range(len(nums)-2, -1, -1):
            right[i] = right[i+1] * nums[i]
        for i in range(1, len(ans)-1):
            ans[i] = left[i-1] * right[i+1]
        ans[0] = right[1]
        ans[-1] = left[-2]
        return ans
```
