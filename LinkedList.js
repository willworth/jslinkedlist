class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // methods
  insertAtHead(data) {
    // create node with data, point next to current head
    const newNode = new LinkedListNode(data, this.head);
    // update head (replace start of list)
    this.head = newNode;
    this.length++;
  }
}

// this could just be a js object but is a class here for consistency

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
