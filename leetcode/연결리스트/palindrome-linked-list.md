* 연결리스트를 순회하며 전체 배열을 생성
* 배열이 palindrome인지 확인해서 리턴
```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        lst = [head.val]
        while head.next:
            head = head.next
            lst.append(head.val)
        return lst[:len(lst)//2][:] == lst[len(lst)-1:len(lst)//2-1:-1][:len(lst[:len(lst)//2][:])]
```
