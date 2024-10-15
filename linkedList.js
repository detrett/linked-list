import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    if (this.head === null && this.tail === null) {
      return 0;
    } else {
      let count = 1;
      let currentNode = this.head;
      while (currentNode.nextNode) {
        count++;
        currentNode = currentNode.nextNode;
      }
      return count;
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      if (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      } else {
        console.error("Index out of bounds");
      }
    }
    return currentNode;
  }

  pop() {
    const lastIndex = this.size() - 2;
    const lastNode = at(lastIndex);
    this.tail = lastNode;
    lastNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.head;
    do {
      if (currentNode.value === value) {
        return true;
      } else if (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
    } while (currentNode.nextNode);
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;
    do {
      if (currentNode.value === value) {
        return index;
      } else if (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
        index++;
      }
    } while (currentNode.nextNode);
    return null;
  }

  toString() {
    if (this.head === null && this.tail === null) {
      console.log("List is empty");
    } else {
      let currentNode = this.head;
      let output = ``;
      do {
        output += `( ${currentNode.value} ) -> `;
        if (currentNode.nextNode) {
          currentNode = currentNode.nextNode;
        }
      } while (currentNode.nextNode);
      output += `null`;
      console.log(output);
    }
  }

  insertAt(value, index) {}

  removeAt(value, index) {}
}
