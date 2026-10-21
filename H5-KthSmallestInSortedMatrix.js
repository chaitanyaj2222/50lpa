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

function KthSmallestInSortedMatrix(matrix, k) {
  let maxHeap = new MaxHeapImplementation();
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (maxHeap.size() < k) {
        maxHeap.insert(matrix[i][j]);
      } else if (maxHeap.size() === k && maxHeap.peek() > matrix[i][j]) {
        maxHeap.remove();
        maxHeap.insert(matrix[i][j]);
      } else {
        continue;
      }
    }
  }
  return maxHeap.peek();
}

// let matrix = [
//   [1, 5, 9],
//   [10, 11, 13],
//   [12, 13, 15],
// ];


// let k = 8;

let matrix = [
  [-5]
]

let k = 1

let answer = KthSmallestInSortedMatrix(matrix, k);

console.log("answer => ", answer);
