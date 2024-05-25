// // *** Linked List
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   getSize() {
//     return this.size;
//   }

//   // O(1)
//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }

//   // O(n)
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = node;
//     }
//     this.size++;
//   }

//   insert(value, index) {
//     if (index < 0 || index > this.size) {
//       return;
//     }
//     if (index === 0) {
//       this.prepend(value);
//     } else {
//       const node = new Node(value);
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       node.next = prev.next;
//       prev.next = node;
//       this.size++;
//     }
//   }

//   removedFrom(index) {
//     if (index < 0 || index >= this.size) {
//       return null;
//     }
//     let removedNode;
//     if (index === 0) {
//       removedNode = this.head;
//       this.head = this.head.next;
//     } else {
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       removedNode = prev.next;
//       prev.next = removedNode.next;
//     }
//     this.size--;
//     return removedNode.value;
//   }

//   removedValue(value) {
//     if (this.isEmpty()) {
//       return null;
//     }
//     if (this.head.value === value) {
//       this.head = this.head.next;
//       this.size--;
//       return value;
//     } else {
//       let prev = this.head;
//       while (prev.next && prev.next.value !== value) {
//         prev = prev.next;
//       }
//       if (prev.next) {
//         const removedNode = prev.next;
//         prev.next = removedNode.next;
//         this.size--;
//         return value;
//       }
//       return null;
//     }
//   }

//   search(value) {
//     if (this.isEmpty()) {
//       return -1;
//     }
//     let i = 0;
//     let curr = this.head;
//     while (curr) {
//       if (curr.value === value) {
//         return i;
//       }
//       curr = curr.next;
//       i++;
//     }
//     return -1;
//   }

//   reverse() {
//     let prev = null;
//     let curr = this.head;
//     while (curr) {
//       let next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.head = prev;
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("The list is empty");
//     } else {
//       let curr = this.head;
//       let listValues = "";
//       while (curr) {
//         listValues += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(listValues);
//     }
//   }
// }

// const list = new LinkedList();
// console.log("List is Empty?", list.isEmpty());
// console.log("List size ", list.getSize());
// list.print();

// list.insert(10, 0);
// list.insert(20, 0);
// list.insert(30, 1);
// list.insert(40, 2);
// list.print();

// list.reverse();
// list.print();

// Linked List with Tail Implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size++;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size++;
    return value;
  }
}

const list = new LinkedList();
console.log("List is Empty?", list.isEmpty());
console.log("List size ", list.getSize());
list.print();

list.append(1);
list.append(2);
list.append(3);
list.print();

list.removeFromFront();
list.print();

list.removeFromEnd();
list.print();

// Linked List Stack
class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    return this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const stack = new LinkedListStack();
console.log("--- STACK ---");
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.getSize());
stack.print();

console.log(stack.pop());
console.log(stack.peek());

// Linked List Queue
class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const queue = new LinkedListQueue();
console.log("--- QUEUE ---");
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.getSize());
queue.print();

console.log(queue.dequeue());
queue.print();

console.log(queue.peek());
