* 알맞은 순서로 노드의 연결 순서를 갱신
```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        ans = prev = ListNode()
        prev.next = head
        while head and head.next:
            tmp = head.next
            prev.next = tmp
            
            head.next = head.next.next
            tmp.next = head

            head = head.next
            prev = prev.next.next
        
        return ans.next
```
