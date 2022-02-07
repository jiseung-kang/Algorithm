* 조건을 하나씩 충족시키면서 코드를 작성했다.
* 숫자로 된 log는 정렬시킬 필요가 없어서 문자로 된 log를 따로 정렬하여 연결시켰다.
```
class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        letLogs = []
        digLogs = []
        for log in logs:
            tmp = log.split()
            if tmp[1].isdigit():
                digLogs.append(log)
            else:
                letLogs.append(tmp)
        letLogs.sort(key=lambda x:(x[1:], x[0]))
        for l in range(len(letLogs)):
            letLogs[l] = ' '.join(letLogs[l])
        
        return letLogs+digLogs
```
