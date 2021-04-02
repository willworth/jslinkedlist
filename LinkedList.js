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

  //A common pitfall for novice developers is to put a comma between class methods,
  // which would result in a syntax error.

  //slower than with an array...
  getByIndex(index) {
    // early return
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
}

// this could just be a js object but is a class here for consistency

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// Helper function
LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  // do it in reverse as we're inserting at beginning
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
