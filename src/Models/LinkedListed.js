export class SingleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
export class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(value) {
    const newNode = new SingleNode(value);
    if (this.length) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length += 1;
    return newNode;
  }
}
