- 중복 조합의 합
```
from itertools import combinations_with_replacement

class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        ans = []
        candidates.sort()
        l = target//candidates[0] + 1
        for r in range(1, l+1):
            for c in (list(combinations_with_replacement(candidates, r))):
                if sum(c) == target:
                    ans.append(c)
            
        return ans
```
