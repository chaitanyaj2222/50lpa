function searchInRotatedSortedArray(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.ceil((start + end) / 2);
        if (arr[mid] === target) {
            return mid
        }
        if (start === end) {
            return -1
        }
        if (arr[start] < arr[mid]) {
            if (target >= arr[start] && target <= arr[mid - 1]) {
                end = mid - 1
            }
            else {
                start = mid + 1
            }
        }
        else {
            if (target >= arr[mid + 1] && target <= arr[end]) {
                start = mid + 1
            }
            else {
                end = mid - 1
            }
        }
    }
    return -1;
}


arr = [4, 5, 6, 7, 0, 1, 2, 3]
target = 0
console.log(searchInRotatedSortedArray(arr, target))