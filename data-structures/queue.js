class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enQueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      //linked list is empty
      this.first = newNode;
      this.last = newNode;
    } else {
      //not empty
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  deQueue() {
    if (this.length === 0) return undefined;
    const temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }

    this.length--;
    return temp;
  }
}
