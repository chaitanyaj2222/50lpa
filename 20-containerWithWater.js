function containerWithMostWater(arr){
    let l = 0;
    let r = arr.length-1;
    maxArea = -Infinity;

    while(r>l){
        let width = r-l;
        let height = Math.min(arr[l], arr[r]);
        let area = height * width;
        maxArea = Math.max(area, maxArea);
        if(arr[r]> arr[l]){
            l++;
        }
        else{
            r--;
        }
    }
    return maxArea

}


const testCases = [
  { height: [1,8,6,2,5,4,8,3,7], expected: 49 },

  { height: [1,1], expected: 1 },

  { height: [1,2,1], expected: 2 },

  { height: [4,3,2,1,4], expected: 16 },

  { height: [1,2,4,3], expected: 4 },

  { height: [2,3,4,5,18,17,6], expected: 17 },

  { height: [1,8,100,2,100,4,8], expected: 200 },

  { height: [5,5,5,5,5], expected: 20 },

  { height: [1,2,3,4,5], expected: 6 },

  { height: [5,4,3,2,1], expected: 6 },

  { height: [10,1,1,1,1,1,10], expected: 60 },

  { height: [1,3,2,5,25,24,5], expected: 24 },

  { height: [100,1,100], expected: 200 },

  { height: [6,9,3,4,5,8], expected: 32 },

  { height: [2,2], expected: 2 }
];

for (const { height, expected } of testCases) {
  const actual = containerWithMostWater(height);

  const passed = actual === expected;

  console.log(
    `${passed ? "✅" : "❌"} height=${JSON.stringify(height)}`
  );

  if (!passed) {
    console.log("   Expected:", expected);
    console.log("   Actual:  ", actual);
  }
}


// maxWater = area = 49