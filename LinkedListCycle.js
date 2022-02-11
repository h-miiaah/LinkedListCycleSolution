/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    var slow = head;
    var fast = head;
    while (slow && fast) {
        slow = slow.next;
        fast = fast.next ? fast.next.next : undefined;
        if (slow === fast) return true;
      }
      return false;
  };



  /*

  - Initialize two pointers slow and fast.
  - Traverse the linked list until either slow or fast becomes null.
  - If either of the pointers becomes null, we return false.
  - If we reach this point, it means that we have a cycle.
  - Set slow to head and fast to head.next.
  

  */