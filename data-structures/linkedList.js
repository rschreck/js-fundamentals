class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      //linked list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      //not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      //empty list..no need to return
      return undefined;
    } else {
      //add do while or for loop
      //create temp and pre
      let temp = this.head;
      let pre = this.head;
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return temp;
    }
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      //empty list..add head and tail to new Node
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  get(index) {
    // should return a node
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const newNode = new Node(value);
    let temp = this.get(index - 1);
    newNode.next = temp.text;
    temp.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    const before = this.get(index - 1);
    const temp = before.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  reverse() {
    let temp = this.head;

    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      console.log("int", i);
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4);
myLinkedList.push(14);
//myLinkedList.pop();
//myLinkedList.unshift(24);
//myLinkedList.shift();
//myLinkedList.insert(1, 43);
// myLinkedList.remove(1);
myLinkedList.reverse();
//console.log(myLinkedList.get(0));

console.log("myLinedList", JSON.stringify(myLinkedList));
