- 스택의 마지막에 들어 있는 인덱스의 온도보다 현재 확인중인 온도가 더 큰 동안 pop을 수행하며 answer을 갱신한다.
```
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        answer = [0 for i in range(len(temperatures))]
        stack = []
        for t in range(len(temperatures)):
            cur = temperatures[t]
            while stack and cur > temperatures[stack[-1]]:
                tmp = stack.pop()
                answer[tmp] = t-tmp
            stack.append(t)
        
        return answer
```
