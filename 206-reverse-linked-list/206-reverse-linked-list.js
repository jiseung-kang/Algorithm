/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let reversed = null
    
    while(head) {
        let next = head.next
        head.next = reversed
        reversed = head
        head = next
    }
    
    return reversed
};