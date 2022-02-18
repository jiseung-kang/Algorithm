- 홀수번째, 짝수번째 연결리스트를 각각 만들고 병합한다.
```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        odd = oddhead = ListNode()
        oddhead.next = head
        if head == None:
            return
        even = evenhead = ListNode()
        evenhead.next = head.next
        while head and head.next:
            oddhead.next = ListNode(head.val)
            evenhead.next = ListNode(head.next.val)
            head = head.next.next
            oddhead = oddhead.next
            evenhead = evenhead.next
        if head:
            oddhead.next = ListNode(head.val)
            oddhead.next.next = even.next
        else:
            oddhead.next = even.next
            
        return odd.next
        

```
