* 문자열을 뒤집어 palindrome인지 확인하는 문제
* 반으로 잘라 앞 문자열과 뒤집어진 뒤 문자열을 비교해 리턴했다.
* non-alphanumeric characters 조건을 놓쳐서 처음에는 isalpha만 확인하여 숫자를 무시해 "0P" 케이스를 놓쳤다.

```
class Solution:
    def isPalindrome(self, s: str) -> bool:
        print(s)
        tmp = ''
        for i in s:
            if i.isalpha() or i.isdigit():
                tmp += i.lower()
        a = tmp[:len(tmp)//2]
        if len(tmp)%2 == 1:
            b = tmp[:len(tmp)//2:-1]
        else:
            b = tmp[:len(tmp)//2-1:-1]
        return a==b
```
