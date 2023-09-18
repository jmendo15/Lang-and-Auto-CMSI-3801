//check if linked list is palindrome
//linked list
// - chain of nodes

class LinkedList {
    //create new node
    constructor(next,data) {
        this.next = next;
        this.data = data;
    }
    append(data) {
        //let vs var
        // var 
        // - you csn fo interesting things
        // -can access
        // -scoping is weird
        // stackoverflow post
        //let
        // - you can't access the let variable outside of this method
        //TODO: diff between null and nill
        //TODO: could rename child to tail
        let child = new LinkedList(null, data);
        let current = this;
        //while we're not at the end
        while (current.next !== null) {
            current = current.next;
        }
        //current.next === null
        current.next = child;
    }
}

function palindrome(head) {
    let current = head;
    let stack = [];
    //builds up the stack represention of the linked list
    //stores linked list order in reverse (upside down)
    while (current !== null) {
        stack.push(current.data);
        current = current.next;
    }
    current = head;
    for (i = 0; i < stack.length; i++) {
        if (current.data !== stack.pop()) {
            return false;
        }
        current = current.next;
    }
    return true;
}


//tests
let notPalindrome = new LinkedList(null, "a");
notPalindrome.append("b");
notPalindrome.append("c");

console.log(palindrome(notPalindrome)); //should return false

let isPalindrome = new LinkedList(null, "a");
isPalindrome.append("b");
isPalindrome.append("a");

console.log(palindrome(isPalindrome)); //should return true