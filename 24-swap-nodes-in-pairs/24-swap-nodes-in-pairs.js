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
var swapPairs = function(head) {
    if (!head) return head
    
    const answer = head.next ? head.next : head
    
    while (head && head.next) {
        const prev = head.next;
        const next = head.next.next;
        
        prev.next = head;
        head.next = next && next.next ? next.next : next;
        head = next;
    }
    
    return answer;
};