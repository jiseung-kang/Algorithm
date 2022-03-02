- 모든 조합 
```
from itertools import product

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        phone = [[],[],["a","b","c"],["d","e","f"],["g","h","i"],["j","k","l"],["m","n","o"],["p","q","r","s"],["t","u","v"],["w","x","y","z"]]
        if digits == "":
            return []
        stack = []
        for d in digits:
            stack.append(phone[int(d)])
        
        ans = []
        
        for i in list(product(*stack)):
            ans.append(''.join(i))
        
        return ans
```
