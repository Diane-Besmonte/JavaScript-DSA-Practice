// *** Stack
// - is a sequential collection of elements that follows the principle of Last In First Out (LIFO)

// Stack Usage
// - Browser history tracking
// - Undo operation when typing
// - Expression conversions
// - Call stack in JavaScript runtime

// *** Queue
// - is a sequential collection of elements that follows the principle of First In First Out (FIFO)

// The Queue data structure supports two main operations
// - Enqueue, which adds and element to the rear/tail of the collection
// - Dequeue, which removes an element from the front/head of the collection

// Queue Usage
// - Printers
// - CPU task scheduling
// - Callback queue in JavaScript runtime

// Queue Implementation
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    return this.items.push(element);
  }

  dequeue(element) {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());

// Queue Implementation Optimized
class Queue2 {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(el) {
    this.items[this.rear] = el;
    this.rear++;
  }

  dequeue(el) {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const queue2 = new Queue2();
console.log(queue2.isEmpty());
queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);
console.log(queue2.size());
queue2.print();
console.log(queue2.dequeue());
console.log(queue2.peek());

// *** Circular Queue
// - is fixed and a single block of memory is used as if the first element is connected to the last element

// The Circular Queue data structure supports two main operations
// - Enqueue, which adds and element to the rear/tail of the collection
// - Dequeue, which removes an element from the front/head of the collection

// Circular Queue Usage
// - Clock
// - Streaming data
// - Traffic lights
