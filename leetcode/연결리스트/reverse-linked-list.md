* 이전노드, 현재노드, 다음노드를 갱신하며 역순으로 노드를 연결한다.
```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur = head
        prev = None
        
        while cur:
            nxt = cur.next
            cur.next = prev
            prev = cur
            cur = nxt

        return prev
```
