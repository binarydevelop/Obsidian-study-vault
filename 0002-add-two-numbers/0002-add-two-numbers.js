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
    let carry = 0
    let dummy = new ListNode()
    let current = dummy
    while(l1 !== null ||  l2 !== null ||  carry !== 0){
        let val1 = l1 === null ? 0 : l1.val
        let val2 = l2 === null ? 0 : l2.val

        let sum = val1 + val2 + carry;

        let digit = sum % 10 
        carry = Math.floor(sum / 10)

        current.next = new ListNode(digit)
        current = current.next
        if(l1 != null){
            l1= l1.next
        } 
        if(l2  != null){
            l2 =l2.next
        }
    }

    return dummy.next
};