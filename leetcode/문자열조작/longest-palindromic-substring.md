- 가장 긴 팰린드롬 찾기
- 단순히 완전 탐색을 하면 시간 초과에 걸린다.
```
class Solution:
    def longestPalindrome(self, s: str) -> str:
        def isPalindrome(s):
            if s == s[::-1]:
                return True
            return False
        ans = ''
        for i in range(len(s)):
            for j in range(i+len(ans), len(s)+1):
                if isPalindrome(s[i:j]):
                    if len(s[i:j]) > len(ans):
                        ans = s[i:j]
        return ans
```
- 짝수, 홀수 경우에 대해 투 포인터로 순회하여 해결해야 한다.
```
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) <= 1:
            return s
        answer = s[0]
        def check(left: int, right: int) -> str:
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return s[left + 1:right]
        for i in range(len(s) - 1):
            answer = max(answer,
                         check(i, i + 1), #even
                         check(i, i + 2), #odd
                         key=len)
    
        return answer
```
