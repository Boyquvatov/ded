class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }
  
    enqueue(data) {
      const newNode = new Node(data);
      if (this.size === 0) {
        this.front = this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
      this.size++;
    }
  
    dequeue() {
      if (this.size === 0) {
        console.log("Queue is empty!");
        return null;
      }
      const dequeuedNode = this.front;
      this.front = this.front.next;
      if (this.size === 1) {
        this.rear = null;
      }
      this.size--;
      return dequeuedNode.data;
    }
  
    peek() {
      if (this.size === 0) {
        console.log("Queue is empty!");
        return null;
      }
      return this.front.data;
    }
  
    getSize() {
      return this.size;
    }
  
    printQueue() {
      if (this.size === 0) {
        console.log("Queue is empty!");
        return;
      }
      let current = this.front;
      let queueElements = [];
      while (current) {
        queueElements.push(current.data);
        current = current.next;
      }
      console.log(queueElements.join(' <- '));
    }
  }
  
  const queue = new Queue();
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  
  queue.printQueue();
  
  console.log("Dequeued:", queue.dequeue());
  queue.printQueue();
  
  console.log("Front:", queue.peek());
  
  console.log("Queue size:", queue.getSize());
  