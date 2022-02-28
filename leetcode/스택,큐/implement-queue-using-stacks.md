- 파이썬을 활용한 큐 구현
```
class MyQueue:

    def __init__(self):
        self.q = []

    def push(self, x: int) -> None:
        self.q.append(x)

    def pop(self) -> int:
        tmp = self.q[0]
        del self.q[0]
        return tmp

    def peek(self) -> int:
        return self.q[0]
        
    def empty(self) -> bool:
        return self.q == []

# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
```
