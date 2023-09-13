class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function isPalindrome(head) {
    if (!head || !head.next) {
      // An empty list or a list with a single node is a palindrome.
      return true;
    }
  
    // Helper function to reverse a linked list.
    function reverseLinkedList(node) {
      let prev = null;
      while (node) {
        const next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return prev;
    }
  
    let slow = head;
    let fast = head;
  
    // Find the middle of the linked list using the slow and fast pointers.
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Reverse the second half of the linked list.
    let reversedHalf = reverseLinkedList(slow);
  
    // Compare the values of the first half and the reversed second half.
    while (reversedHalf) {
      if (head.val !== reversedHalf.val) {
        return false; // Not a palindrome
      }
      head = head.next;
      reversedHalf = reversedHalf.next;
    }
  
    return true; // Palindrome
  }
  
  // Example usage:
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(2);
  list.next.next.next = new ListNode(1);
  
  console.log(isPalindrome(list)); // Output: true
  