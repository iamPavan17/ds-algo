class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    this.data = [...this.data, value]; // or this.data.push(value)
    return this;
  }

  pop() {
    this.data.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();

console.log(myStack.peek());

console.log(myStack);
