- 파이썬의 딕셔너리를 활용한 
```
class MyHashMap:
    def __init__(self):
        self.hm = {}

    def put(self, key: int, value: int) -> None:
        self.hm[key] = value

    def get(self, key: int) -> int:
        if key not in self.hm:
            return -1
        return self.hm[key]

    def remove(self, key: int) -> None:
        if key in self.hm:
            del self.hm[key]
        return
```
