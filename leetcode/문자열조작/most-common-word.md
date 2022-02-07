* 가장 많이 등장하는 단어를 찾기 위해 파이썬의 딕셔너리 구조를 활용하였다.
* 따로 정규식을 사용하지 않고 replace로 구분자를 대체하였다. 이 때 띄어쓰기가 포함되지 않은 구분자에 대한 테스트 케이스를 놓쳤다. (b,b,b,b => bbbb => b b b b)
* 마지막에 banned에 포함되지 않은 가장 잦은 빈도의 단어를 리턴했다.

```
class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        punc = [',','!','?',';','.',"'"]
        for p in punc:
            paragraph = paragraph.replace(p,' ')
        dic = {}
        for p in paragraph.split():
            p = p.lower()
            if p in dic:
                dic[p] += 1
            else:
                dic[p] = 1
        dic = sorted(dic.items(), key=lambda item: item[1], reverse=True)
        for d in dic:
            if d[0] not in banned:
                return d[0]
```
