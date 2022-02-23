- 파이썬을 활용한 원형 큐 구현
```
class MyCircularQueue:

    def __init__(self, k: int):
        self.q = []
        self.maxlen = k

    def enQueue(self, value: int) -> bool:
        if len(self.q) == self.maxlen:
            return False
        else:
            self.q.append(value)
            return True

    def deQueue(self) -> bool:
        if self.q == []:
            return False
        else:
            del self.q[0]
            return True
        
    def Front(self) -> int:
        if self.q == []:
            return -1
        else:
            return self.q[0]

    def Rear(self) -> int:
        if self.q == []:
            return -1
        else:
            return self.q[-1]        

    def isEmpty(self) -> bool:
        return self.q == []

    def isFull(self) -> bool:
        return len(self.q) == self.maxlen

# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()
```
