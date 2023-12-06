// Implementing Linked List

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    // Approch 1 - START
    //   let currentNext = this.head.next;
    //   if (!currentNext) {
    //     this.head.next = newNode;
    //   }

    //   while (currentNext) {
    //     if (!currentNext.next) {
    //       currentNext.next = newNode;
    //       break;
    //     } else {
    //       currentNext = currentNext.next;
    //     }
    //   }
    //   this.tail = newNode;
    // Approch 1 - END

    // Approch 2 - START
    this.tail.next = newNode;
    this.tail = newNode;
    // Approch 2 - END

    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head,
    };

    this.head = newNode;
    this.length++;

    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(25);
console.log(myLinkedList);
