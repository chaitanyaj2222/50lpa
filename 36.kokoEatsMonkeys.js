function kokoEatsMonkeys(arr, h) {
    // find the largest number in the array first
    let max = arr[0]
    arr.forEach(each => {
        max = Math.max(max, each)
    })


    let start = 1;
    let end = max;

    let k = max


    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        let localHours = 0;

        arr.forEach(each => {
            localHours += Math.ceil(each / mid)
        })

        if (localHours <= h) {
            k = Math.min(k, mid)
            end = mid - 1

        }
        else {
            start = mid + 1
        }

    }
    return k;
}


piles = [3, 6, 7, 11]
h = 8
console.log(kokoEatsMonkeys(piles, h))
