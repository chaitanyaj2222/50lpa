function twoSumII(arr, target){

    let l = 0;
    let r = arr.length-1;

    while(r>l){
            let sum = arr[l]+arr[r]

        if(sum === target){
            return [l+1, r+1]
        }
        else if(sum > target){
            r--;
        }
        else{
            l++
        }
    }
    return []

}

const testCases = [
  { numbers: [2, 7, 11, 15], target: 9, expected: [1, 2] },
  { numbers: [2, 3, 4], target: 6, expected: [1, 3] },
  { numbers: [-1, 0], target: -1, expected: [1, 2] },
  { numbers: [1, 2, 3, 4, 5], target: 9, expected: [4, 5] },
  { numbers: [1, 2, 3, 4, 5], target: 3, expected: [1, 2] },
  { numbers: [1, 2, 3, 4, 5], target: 8, expected: [3, 5] },
  { numbers: [-5, -3, -1, 0, 2, 4, 8], target: 3, expected: [3, 6] },
  { numbers: [-5, -3, -1, 0, 2, 4, 8], target: 5, expected: [3, 7] },
  { numbers: [1, 3, 5, 7, 9, 11], target: 20, expected: [5, 6] },
  { numbers: [1, 3, 5, 7, 9, 11], target: 8, expected: [1, 4] },
  { numbers: [2, 2, 3, 4], target: 4, expected: [1, 2] },
  { numbers: [1, 1, 2, 3, 4], target: 2, expected: [1, 2] },
  { numbers: [1, 2, 4, 6, 10], target: 8, expected: [2, 4] },
  { numbers: [1, 2, 4, 6, 10], target: 12, expected: [2, 5] },
  { numbers: [-10, -5, 0, 5, 10], target: 0, expected: [1, 5] },
];

for (const { numbers, target, expected } of testCases) {
  const actual = twoSumII(numbers, target);

  const passed =
    actual.length === expected.length &&
    actual.every((value, index) => value === expected[index]);

  console.log(
    `${passed ? "✅" : "❌"} numbers=${JSON.stringify(
      numbers
    )}, target=${target}`
  );

  if (!passed) {
    console.log("   Expected:", expected);
    console.log("   Actual:  ", actual);
  }
}