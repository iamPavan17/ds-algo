class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(value) {
    this.data[this.length++] = value;
    return this.length;
  }

  pop() {
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  shift() {
    const firstElement = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstElement;
  }

  unshift(value) {
    const dataClone = [value, ...Object.values(this.data)];
    for (let i = 0; i <= this.length; i++) {
      this.data[i] = dataClone[i];
    }

    this.length++;
    return this.length;
  }
}

const arr = new MyArray();
arr.push("a");
arr.push("b");
arr.push("c");

// arr.pop();
// arr.shift();
arr.unshift("hello");
console.log(arr);
