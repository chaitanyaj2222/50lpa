function removeDuplicates(arr){
    let l = 0;
    let r = 0

    while(r<arr.length){
        if(arr[r]>arr[l]){
            l++;
            arr[l] = arr[r]
        }
        r++
    }
    return l+1;

}

const testCases = [
  {
    nums: [1, 1, 2],
    expectedK: 2,
    expectedArray: [1, 2]
  },

  {
    nums: [0,0,1,1,1,2,2,3,3,4],
    expectedK: 5,
    expectedArray: [0,1,2,3,4]
  },

  {
    nums: [1],
    expectedK: 1,
    expectedArray: [1]
  },

  {
    nums: [1,1,1,1,1],
    expectedK: 1,
    expectedArray: [1]
  },

  {
    nums: [1,2,3,4,5],
    expectedK: 5,
    expectedArray: [1,2,3,4,5]
  },

  {
    nums: [1,1,2,2,3,3],
    expectedK: 3,
    expectedArray: [1,2,3]
  },

  {
    nums: [0,0,0,0],
    expectedK: 1,
    expectedArray: [0]
  },

  {
    nums: [-3,-3,-2,-2,-1,-1],
    expectedK: 3,
    expectedArray: [-3,-2,-1]
  },

  {
    nums: [-5,-5,-5,-5,0,0,1,1,1],
    expectedK: 3,
    expectedArray: [-5,0,1]
  },

  {
    nums: [1,2],
    expectedK: 2,
    expectedArray: [1,2]
  }
];

for (const { nums, expectedK, expectedArray } of testCases) {
  const copy = [...nums];

  const actualK = removeDuplicates(copy);

  const actualArray = copy.slice(0, actualK);

  const passed =
    actualK === expectedK &&
    JSON.stringify(actualArray) === JSON.stringify(expectedArray);

  console.log(
    `${passed ? "✅" : "❌"} nums=${JSON.stringify(nums)}`
  );

  if (!passed) {
    console.log("   Expected K:", expectedK);
    console.log("   Actual K:  ", actualK);
    console.log("   Expected:", expectedArray);
    console.log("   Actual:  ", actualArray);
  }
}