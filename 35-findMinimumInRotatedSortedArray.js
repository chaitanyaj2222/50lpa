function minimumInRotatedSortedArray(arr){
    let start = 0;
    let end = arr.length-1;

    while(start<end){
        let mid = Math.floor((start+end)/2)

        if(arr[mid] > arr[end]){
           start = mid+1
        }
        else{
            end = mid
        }
    }

        return arr[start]
}

// let arr =  [4, 5, 6, 7, 0, 1, 2]

// let arr =  [11, 13, 15, 17]

let arr = [2, 3, 4, 5, 1];


console.log(minimumInRotatedSortedArray(arr))


