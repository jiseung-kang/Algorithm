- 순서가 섞인 문자열을 같은 문자열로 인식하기 위해 문자열을 오름차순 정렬한 값을 key로 두고 해결했다.
- 파이썬의 딕셔너리 활용
```
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = []
        dict = {}
        for str in strs:
            tmp = []
            for s in str:
                tmp.append(s)
            key = ''.join(sorted(tmp))
            if key in dict:
                dict[key] = dict[key] + [str]
            else: 
                dict[key] = [str]
                
        for d in dict.values():
            ans.append(d)
        
        return ans
```
