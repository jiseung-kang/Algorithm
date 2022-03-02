- 조합
```
from itertools import combinations

class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        nums = [i+1 for i in range(n)]
        return list(combinations(nums, k))
```
