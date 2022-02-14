* list1, list2의 head를 비교하여 정렬한다
* list1을 기준으로 재귀적으로 head를 비교하며 정렬하여 다음 노드를 연결한다.
```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1:
            list2, list1 = list1, list2
        if list2 and list1.val > list2.val:
            list2, list1 = list1, list2
        if list1:
            list1.next = self.mergeTwoLists(list1.next, list2)
        
        return list1
```
