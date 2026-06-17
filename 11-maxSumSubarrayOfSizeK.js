Input:
nums = [2,1,5,1,3,2]
k = 3

Output:
9


function maxSumSubarrayOfSizeK(nums, size){
    let maxSum = 0;
    for(let curr = 0;curr <k;curr++){
         maxSum+=nums[curr]
    }

    let sum = maxSum;
    for(let curr = k;curr<nums.length;curr++){
        sum+=nums[curr];
        sum-=nums[curr-k];
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum
}


console.log(maxSumSubarrayOfSizeK(nums, k))