const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.head = null
  }
  enqueue(value) {
    if (this.head) {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = new ListNode(value)
    } else {
      this.head = new ListNode(value)
    }
  }
  dequeue() {
    if (this.head) {
      let current = this.head
      this.head = current.next
      return current.value
    }
    return;
  }
  getUnderlyingList() {
    return this.head
  }
}
