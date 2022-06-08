/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let tmp = new ListNode()
    let answer = tmp
    
    while(list1 && list2) {
        if (list1.val <= list2.val) {
            tmp.next = list1
            list1 = list1.next
        }
        else {
            tmp.next = list2
            list2 = list2.next
        }
        tmp = tmp.next
    }
    
    if (list1) tmp.next = list1
    if (list2) tmp.next = list2
    
    return answer.next;
};