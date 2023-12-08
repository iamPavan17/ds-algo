class Queue {
  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[0];
  }

  enqueue(value) {
    this.data = [...this.data, value];
    return this.data;
  }

  dequeue() {
    this.data = this.data.slice(1);
    return this.data;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();

console.log(myQueue.peek());

console.log(myQueue);
