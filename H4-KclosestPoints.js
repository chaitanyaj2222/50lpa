class MaxHeapImplementation {
  constructor(
    thisHeap = [],
    compare = (val) => {
      val;
    },
  ) {
    this.heap = thisHeap;
    this.compare = compare;
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
    if(this.size() < 2) return
    let insertedElementIndex = this.size() - 1;
    let indexOfTheParentOfInsertedElement = Math.floor(
      (insertedElementIndex - 1) / 2,
    );

    while (
      this.compare(this.heap[insertedElementIndex]) >
      this.compare(this.heap[indexOfTheParentOfInsertedElement])
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
        this.compare(this.heap[2 * parentIndex + 1]) > this.compare(this.heap[2 * parentIndex + 2])
          ? 2 * parentIndex + 1
          : 2 * parentIndex + 2;

      while (this.compare(this.heap[parentIndex]) < this.compare(this.heap[swapIndex])) {
        let temp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[swapIndex];
        this.heap[swapIndex] = temp;
        parentIndex = swapIndex;
        if (
          2 * parentIndex + 1 < this.size() &&
          2 * parentIndex + 2 < this.size()
        ) {
          swapIndex =
            this.compare(this.heap[2 * parentIndex + 1]) > this.compare(this.heap[2 * parentIndex + 2])
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
      if (this.compare(this.heap[0]) < this.compare(this.heap[1])) {
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

let heap = new MaxHeapImplementation(null, (val) => {
  (val) => val.distance;
});

function KClosestPoints(points, k) {
  let heap = new MaxHeapImplementation([], (val) => {
    return val?.distance;
  });

  for (let point of points) {
    let distance = point[0] * point[0] + point[1] * point[1];

    console.log("heap after inserting every point => ", distance, heap);

    if (heap.size() < k) {
      heap.insert({
        distance,
        point,
      });
      continue;
    }
    if (distance < heap.peek().distance) {
      heap.remove();
      heap.insert({
        distance,
        point,
      });
    }
  }

  return heap.heap.map((eachNode) => eachNode.point);
}

let answer = KClosestPoints(
  [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  2,
);

console.log("ANSWER => ", answer);
