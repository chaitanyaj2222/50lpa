function moveZeroes(arr) {
    let valid = 0;
    let invalid = 0;
    const arrLength = arr.length;

    while (invalid < arrLength && valid < arrLength) {
        while (valid < arrLength && arr[valid] == 0) {
            valid++;
        }
        while (invalid < arrLength && arr[invalid] !== 0) {
            invalid++;
        }
        if (valid >= arrLength || invalid >= arrLength) {
            break;
        }
        //swap logic;
        if (invalid < valid) {

            let temp = arr[valid];
            arr[valid] = arr[invalid];
            arr[invalid] = temp;
        }
        else {
            valid++;
        }
    }
    return arr;
}

console.log(moveZeroes([1,0,2]))

const testCases = [
  {
    nums: [0, 1, 0, 3, 12],
    expected: [1, 3, 12, 0, 0],
  },
  {
    nums: [0],
    expected: [0],
  },
  {
    nums: [1],
    expected: [1],
  },
  {
    nums: [1, 2, 3],
    expected: [1, 2, 3],
  },
  {
    nums: [0, 0, 0],
    expected: [0, 0, 0],
  },
  {
    nums: [1, 0, 2, 0, 3, 0],
    expected: [1, 2, 3, 0, 0, 0],
  },
  {
    nums: [4, 2, 4, 0, 0, 3, 0, 5, 1, 0],
    expected: [4, 2, 4, 3, 5, 1, 0, 0, 0, 0],
  },
  {
    nums: [0, 1],
    expected: [1, 0],
  },
  {
    nums: [1, 0],
    expected: [1, 0],
  },
  {
    nums: [0, 0, 1],
    expected: [1, 0, 0],
  },
    {
    nums: [1,0,2],
    expected: [1, 2,0],
  },
];

for (const { nums, expected } of testCases) {
  const actualInput = [...nums];

  moveZeroes(actualInput);

  const passed =
    JSON.stringify(actualInput) === JSON.stringify(expected);

  console.log(
    `${passed ? "✅" : "❌"} nums=${JSON.stringify(nums)}`
  );

  if (!passed) {
    console.log("   Expected:", expected);
    console.log("   Actual:  ", actualInput);
  }
}