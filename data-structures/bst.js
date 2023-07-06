class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  minimumValue(currentNode) {
    if (this.root === null) return undefined;

    while (currentNode.left != null) {
      currentNode < currentNode.left;

      return currentNode;
    }
  }
  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.left) {
        temp = this.left;
      } else if (value > temp.right) {
        temp = this.right;
      } else {
        return true;
      }
    }
    return false;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (temp.value === newNode.value) return undefined;
      if (newNode.value < temp.value) {
        //left
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        //right
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
}
const myTree = new BST();
myTree.insert(47);
myTree.insert(7);
myTree.insert(3);
myTree.insert(100);
myTree.insert(23);
