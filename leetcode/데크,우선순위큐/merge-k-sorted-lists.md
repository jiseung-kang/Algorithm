- heap을 활용한 정렬
```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

import heapq

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        heap = []
        ans = tail = ListNode(0)
        for i in range(len(lists)):
            if lists[i]:
                heapq.heappush(heap, (lists[i].val, i, lists[i]))

        while heap:
            node = heapq.heappop(heap)[2]
            tail.next = node
            tail = tail.next
            if node.next:
                i += 1
                heapq.heappush(heap, (node.next.val, i, node.next))

        return ans.next
```
