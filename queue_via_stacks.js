class MyQueue {
    constructor() {
      this.stack1 = []; // For enqueue (push) operations
      this.stack2 = []; // For dequeue (pop) operations
    }
  
    // Add an element to the back of the queue.
    enqueue(value) {
      this.stack1.push(value);
    }
  
    // Remove and return the front element of the queue.
    dequeue() {
      if (this.stack2.length === 0) {
        // If stack2 is empty, transfer elements from stack1 to stack2.
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      // Pop from stack2 to dequeue (if it's still empty, return undefined).
      return this.stack2.pop();
    }
  
    // Peek at the front element of the queue without removing it.
    peek() {
      if (this.stack2.length === 0) {
        // If stack2 is empty, transfer elements from stack1 to stack2.
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      // Peek at the top element of stack2 (if it's still empty, return undefined).
      return this.stack2[this.stack2.length - 1];
    }
  
    // Check if the queue is empty.
    isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  
    // Get the size of the queue.
    size() {
      return this.stack1.length + this.stack2.length;
    }
  }
  
  // Example usage:
  const myQueue = new MyQueue();
  
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  
  console.log(myQueue.dequeue()); // Output: 1
  console.log(myQueue.peek());    // Output: 2
  console.log(myQueue.size());    // Output: 2
  