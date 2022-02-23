- collections.Counter 문자가 몇번 등장하는지 체크
- set 확인된 문자인지 확인
- 확인하는 문자가 스택의 마지막 문자보다 빠른 문자이고, 스택의 마지막 문자가 다음에 또 등장한다면 해당 문자를 방문하지 않는다.
```
import collections

class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        counter = collections.Counter(s)
        visited = set()
        stack = []

        for c in s:
            counter[c] -= 1
            if c in visited:
                continue
            while stack and c < stack[-1] and counter[stack[-1]] > 0:
                visited.remove(stack.pop())
            stack.append(c)
            visited.add(c)

        return ''.join(stack)
```
