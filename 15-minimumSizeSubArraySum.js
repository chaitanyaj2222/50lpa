function minSizesubArraySum(arr, target) {
    let n = arr.length
    let minLength = n + 1
    let sum = 0;
    let i = 0;
    let j = 0
    sum = arr[j];

    while (j < n) {
        if (sum >= target) {
            minLength = Math.min(j - i + 1, minLength);
            sum -= arr[i];
            i++;
        }
        else {
            j++;
            if (j < n) {
                sum += arr[j]
            }
        }
    }
    // if the sum of the longest subArray itself can't reach the target
    if (minLength == n + 1) {
        return 0
    }
    return minLength


}

const arr = [2, 3, 1, 2, 4, 3]
const target = 7
console.log(minSizesubArraySum(arr, target))