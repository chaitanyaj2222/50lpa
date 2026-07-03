function binarySearch(arr, target){
    let start = 0;
    let end = arr.length-1

    while(arr[start] <= target && arr[end] >= target){
        let mid = Math.ceil((start+end)/2);
        if(arr[mid] === target){
            return mid
        }
        else if(target > arr[mid]){
            start = mid + 1
        }
        else{
            end = mid - 1;
        }
    }
    return -1
   
}


const arr =  [-1, 0, 3, 5, 9, 12]
const target = 13;

console.log(binarySearch(arr, target))