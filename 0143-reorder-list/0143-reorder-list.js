/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head
    let fast = head

    while(fast != null && fast.next != null){
        fast = fast.next.next
        slow = slow.next
    }

    let second = slow.next
    slow.next = null
    let prev = null 
    let current = second 

    while(current != null){
        let next = current.next
        current.next = prev

        prev = current
        current = next
    }

    let first = head
    second = prev 

    while(second!= null){
        let temp1 = first.next
        let temp2 = second.next

        first.next = second
        second.next = temp1
        first = temp1
        second= temp2
    }

};