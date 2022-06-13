/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let cur = head;
    let start = head;
    let index = 1;
    
    while(index < left) {
        start = cur
        cur = cur.next;
        index++;
    }
    
    let reversed = null;
    let end = cur;
    
    while(index <= right) {
        const next = cur.next;
        cur.next = reversed;
        reversed = cur;
        cur = next;
        index++;
    }
    start.next = reversed;
    end.next = cur;
    
    return left > 1 ? head : reversed
};