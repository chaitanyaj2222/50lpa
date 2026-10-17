class MaxHeapImplementation {
  constructor(thisHeap = []) {
    this.heap = thisHeap;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let insertedElementIndex = this.size() - 1;
    let indexOfTheParentOfInsertedElement = Math.floor(
      (insertedElementIndex - 1) / 2,
    );

    while (
      this.heap[insertedElementIndex] >
      this.heap[indexOfTheParentOfInsertedElement]
    ) {
      let temp = this.heap[indexOfTheParentOfInsertedElement];
      this.heap[indexOfTheParentOfInsertedElement] =
        this.heap[insertedElementIndex];
      this.heap[insertedElementIndex] = temp;
      insertedElementIndex = indexOfTheParentOfInsertedElement;
      indexOfTheParentOfInsertedElement = Math.floor(
        (insertedElementIndex - 1) / 2,
      );
    }
  }

  remove() {
    // swap first element with the last element and bubble down
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();
    let removedValue = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];

    this.heap.pop();
    this.bubbleDown();
    return removedValue;
  }

  bubbleDown() {
    // swap the parent with the greatest of the 2 children;
    // it has both chidlren

    if (this.size() >= 3) {
      let parentIndex = 0;
      let swapIndex =
        this.heap[2 * parentIndex + 1] > this.heap[2 * parentIndex + 2]
          ? 2 * parentIndex + 1
          : 2 * parentIndex + 2;

      while (this.heap[parentIndex] < this.heap[swapIndex]) {
        let temp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[swapIndex];
        this.heap[swapIndex] = temp;
        parentIndex = swapIndex;
        if (
          2 * parentIndex + 1 < this.size() &&
          2 * parentIndex + 2 < this.size()
        ) {
          swapIndex =
            this.heap[2 * parentIndex + 1] > this.heap[2 * parentIndex + 2]
              ? 2 * parentIndex + 1
              : 2 * parentIndex + 2;
        } else if (2 * parentIndex + 1 < this.size()) {
          swapIndex = 2 * parentIndex + 1;
        } else {
          return;
        }
      }
    }
    // has only one child
    else if (this.size() === 2) {
      if (this.heap[0] < this.heap[1]) {
        let temp = this.heap[0];
        this.heap[0] = this.heap[1];
        this.heap[1] = temp;
      }
    } else {
      return;
    }
  }

  printHeap() {
    console.log(this.heap);
  }
}

function lastStoneWeight(stones) {
  if (stones.length === 0) return "stones cant be empty";
  if (stones.length === 1) return stones[0];
  let maxHeap = new MaxHeapImplementation();

  for (let stone of stones) {
    maxHeap.insert(stone);
  }

  while (maxHeap.size() > 1) {
    let firstStone = maxHeap.remove();
    let secondStone = maxHeap.remove();
    let newStoneWeight = Math.abs(firstStone - secondStone);
    if (newStoneWeight > 0) maxHeap.insert(newStoneWeight);
  }
  return maxHeap.size() === 1 ? maxHeap.heap[0] : 0;
}

let answer = lastStoneWeight([2, 7, 4, 1, 8, 1]);

console.log("answer", answer);
