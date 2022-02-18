- 최적화되지 않은 코드
- left 이전까지의 연결리스트 + left~right에 해당하는 부분을 역순으로 하나씩 right 이후의 연결리스트에 새롭게 연결
```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        if head.next == None or left == right:
            return head
        tmp = root = ListNode()
        root.next = head
        rev = revhead = ListNode()
        merged = front = ListNode()
        
        cur = 0
        while root and root.next:
            if cur == left:
                while cur <= right:
                    revhead.next = root
                    revhead = revhead.next
                    root = root.next
                    cur += 1
                revhead.next = None
                while rev.next:
                    tmp = rev.next
                    rev.next = rev.next.next
                    tmp.next = root
                    root = tmp
                break
            else:
                front.next = ListNode(root.val)
                front = front.next
            root = root.next
            cur += 1
        if left == 1:
            return tmp
        front.next = tmp 
        
        return merged.next.next
```
