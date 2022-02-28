- 완전 탐색으로 가장 긴 부분 문자열 
```
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0:
            return 0
        ans = 1
        for i in range(len(s)):
            sub = [s[i]]
            tmp = 1
            for j in range(i+1, len(s)):
                if s[j] in sub:
                    break
                else:
                    sub.append(s[j])
                    tmp += 1
            if ans < tmp:
                ans = tmp
        return ans
```
