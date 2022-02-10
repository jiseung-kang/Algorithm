* 완전 탐색의 경우 시간 초과
```
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        ans = []
        nums.sort()
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                for k in range(j+1, len(nums)):
                    if nums[i] + nums[j] + nums[k] == 0:
                        ans.append([nums[i],nums[j],nums[k]])
        ans = list(map(tuple,ans))
        ans = set(list(map(tuple,ans)))
        return ans
```

* 투포인터로 left, right값을 비교하며 left, i, right의 합이 0인 경우를 모두 구한다.
```
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        ans = []
        nums.sort()

        for i in range(len(nums) - 2):
            if nums[i] > 0:
                continue
            left = i + 1 
            right = len(nums) - 1
            while left < right:
                tmp = nums[i] + nums[left] + nums[right]
                if tmp < 0:
                    left += 1
                elif tmp > 0:
                    right -= 1
                else:
                    ans.append([nums[left], nums[i], nums[right]])
                    left += 1
                    right -= 1
        ans = list(map(tuple,ans))
        ans = set(list(map(tuple,ans)))
        return ans
```
