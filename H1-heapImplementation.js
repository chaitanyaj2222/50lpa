class MinHeap {
  constructor(heapArray = []) {
    this.heap = heapArray;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
  
  bubbleUp() {
    let insertedElementIndex = this.heap.length - 1;

    let value = this.heap[insertedElementIndex];

    let parentOfInsertedElementIndex = Math.floor(
      (insertedElementIndex - 1) / 2,
    );

    while (
      this.heap[parentOfInsertedElementIndex] > this.heap[insertedElementIndex]
    ) {
      this.heap[insertedElementIndex] = this.heap[parentOfInsertedElementIndex];
      this.heap[parentOfInsertedElementIndex] = value;
      insertedElementIndex = parentOfInsertedElementIndex;
      parentOfInsertedElementIndex = Math.floor((insertedElementIndex - 1) / 2);
    }
  }

  bubbleDown() {
    let rootElementIndex = 0;
    let firstChildIndex = 1;
    let secondChildIndex = 2;
    let swapIndex;

    while (true) {
        if(firstChildIndex < this.size() && secondChildIndex < this.size() ){
      swapIndex =
        Math.min(this.heap[firstChildIndex], this.heap[secondChildIndex]) ===
        this.heap[firstChildIndex]
          ? firstChildIndex
          : secondChildIndex;
        }
        else if(firstChildIndex>= this.size() && secondChildIndex >=this.size()){
            break;
        }
        else{
            swapIndex = firstChildIndex < this.size() ? firstChildIndex : secondChildIndex
        }

      if (this.heap[swapIndex] < this.heap[rootElementIndex]) {
        // swap them

        let temp = this.heap[swapIndex];
        this.heap[swapIndex] = this.heap[rootElementIndex];
        this.heap[rootElementIndex] = temp;

        rootElementIndex = swapIndex;

        firstChildIndex = 2 * rootElementIndex + 1;

        secondChildIndex = 2 * rootElementIndex + 2;

        continue;
      }

      break;
    }
  }

  remove() {
    if(this.size() === 0){
        return null
    }
    if( this.size() === 1){
        return this.heap.pop();
    }
  let removedValue  = this.heap[0]

  this.heap[0] = this.heap.pop();
    
    this.bubbleDown();
    return removedValue;
    
  }

  printHeap() {
    return this.heap;
  }
}

const heap = new MinHeap([2, 5, 7, 8, 6]);

console.log(heap.peek());
console.log(heap.size());

heap.insert(3);
heap.insert(13);
heap.insert(1);

console.log(heap.printHeap());

heap.remove();
console.log(heap.printHeap());
