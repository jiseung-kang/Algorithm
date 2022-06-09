/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let answer = new ListNode();
    let head = answer;
    let tmp = 0;
    let check = 0;

    while(l1 || l2 || tmp){

        if(l1 !== null){
            tmp += l1.val;
            l1 = l1.next;
        }
        
        if(l2 !== null){
            tmp += l2.val;
            l2 = l2.next;
        }
        
        if(tmp >= 10){
            check = 1;
            tmp -= 10;
        }

        head.next = new ListNode(tmp);
        head = head.next;

        tmp = check;
        check = 0;
    }

    return answer.next;
};