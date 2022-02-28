- 파이썬의 Counter 활용
```
import collections

class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        ans = 0
        stone = collections.Counter(stones)
        for j in jewels:
            ans += stone[j]
        return ans
```
