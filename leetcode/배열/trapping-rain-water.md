* 투포인터로 왼쪽끝, 오른쪽끝에서 시작해 최대 높이를 갱신하면서 빗물이 고이는 양을 계산한다.
```
class Solution:
    def trap(self, height: List[int]) -> int:
        water = 0
        left = 0
        right = len(height) - 1
        left_max, right_max = height[left], height[right]

        while left < right:
            left_max = max(height[left], left_max)
            right_max = max(height[right], right_max)
            if left_max <= right_max:
                water += left_max - height[left]
                left += 1
            else:
                water += right_max - height[right]
                right -= 1
        return water
```
