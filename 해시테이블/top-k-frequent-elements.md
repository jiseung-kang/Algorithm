- 파이썬의 Counter, most_common()을 활용한 빈도 높은 요소 찾기
```
import collections

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        ans = []
        
        count = collections.Counter(nums)
        
        for i,v in count.most_common():
            ans.append(i)
            if len(ans) == k:
                break

        return ans
```
