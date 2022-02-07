* 문자열을 뒤집을 때 별도의 메모리를 사용하지 않아야 하는 문제
* 뒤집으면서 이동해야할 인덱스의 문자와 교환하면서 풀면 된다.

```
class Solution:
    def reverseString(self, s: List[str]) -> None:
        for i in range(len(s)//2):
            s[i], s[len(s)-i-1] = s[len(s)-i-1], s[i]
```
