- 파이썬을 활용한 원형 데크 구현

```
class MyCircularDeque:

    def __init__(self, k: int):
        self.q = []
        self.maxlen = k

    def insertFront(self, value: int) -> bool:
        if len(self.q) == self.maxlen:
            return False
        else:
            self.q.insert(0, value)
            return True

    def insertLast(self, value: int) -> bool:
        if len(self.q) == self.maxlen:
            return False
        else:
            self.q.append(value)
            return True

    def deleteFront(self) -> bool:
        if self.q == []:
            return False
        else:
            del self.q[0]
            return True

    def deleteLast(self) -> bool:
        if self.q == []:
            return False
        else:
            del self.q[-1]
            return True

    def getFront(self) -> int:
        if self.q == []:
            return -1
        else:
            return self.q[0]

    def getRear(self) -> int:
        if self.q == []:
            return -1
        else:
            return self.q[-1]

    def isEmpty(self) -> bool:
        return self.q == []

    def isFull(self) -> bool:
        return len(self.q) == self.maxlen


# Your MyCircularDeque object will be instantiated and called as such:
# obj = MyCircularDeque(k)
# param_1 = obj.insertFront(value)
# param_2 = obj.insertLast(value)
# param_3 = obj.deleteFront()
# param_4 = obj.deleteLast()
# param_5 = obj.getFront()
# param_6 = obj.getRear()
# param_7 = obj.isEmpty()
# param_8 = obj.isFull()
```
