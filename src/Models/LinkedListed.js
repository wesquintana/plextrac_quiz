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
    this.length++;
    return newNode;
  }
  pop() {
    // if there aren't any nodes, return nothing
    if (!this.length) {
      return null;
    } else {
      //find the next to last node, this will become the tail
      let currentNode = this.head;
      let nextToLast = this.head;
      while (currentNode.next) {
        nextToLast = currentNode;
        currentNode = currentNode.next;
      }
      nextToLast.next = null;
      this.tail = nextToLast;
      this.length--;
      if (!this.length) {
        this.head = null;
        this.tail = null;
      }
      return currentNode;
    }
  }
  unshift(value) {
    const newNode = new SingleNode(value);
    if (!this.length) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return newNode;
  }
  shift() {
    if (!this.length) {
      return null;
    } else {
      const removedNode = this.head;
      this.head = this.head.next;
      this.length--;
      if (!this.length) {
        this.tail = null;
      }
      return removedNode;
    }
  }
}
