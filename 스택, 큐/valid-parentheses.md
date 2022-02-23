- 괄호가 올바르게 매칭되었는지 스택을 활용하여 해결
```
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        open = ['(','{', '[']
        for i in s:
            if i in open:
                stack.append(i)
            else:
                if len(stack) == 0:
                    return False
                if (i == ')' and stack[-1] == '(') or (i == '}' and stack[-1] == '{') or (i == ']' and stack[-1] == '['):
                    del stack[-1]
                else:
                    return False
        return stack == []
```
