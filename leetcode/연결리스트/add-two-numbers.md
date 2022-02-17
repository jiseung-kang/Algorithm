* 두 수를 덧셈하는 방식으로 10이 넘어가는 숫자를 넘겨주며 연결 리스트 노드를 붙인다.
```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        ans = head = ListNode()
        tmp1 = 0
        tmp2 = 0
        while l1 or l2 or tmp1 != 0:
            if l1:
                tmp1 += l1.val
                l1 = l1.next
            if l2:
                tmp2 += l2.val
                l2 = l2.next
            if tmp1+tmp2 >= 10:
                node = ListNode(tmp1+tmp2-10, None)
                tmp1, tmp2 = 1, 0
            else:
                node = ListNode(tmp1+tmp2, None)
                tmp1, tmp2 = 0, 0
            head.next = node
            head = head.next
        
        return ans.next
```
