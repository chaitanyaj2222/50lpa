function threeSum(inputArr) {
    let arr = [...inputArr].sort((x, y) => x - y);
    let trips = []
    for (let i = 0; i <= arr.length - 3; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue
        }

        let l = i + 1;
        let r = arr.length - 1;
        let target = -(arr[i])
        while (r > l) {
            if (r < arr.length - 1 && arr[r] === arr[r + 1]) {

                r--;
                continue
            }
            if (l > i + 1 && arr[l] === arr[l - 1]) {

                l++;
                continue
            }
            let sum = arr[l] + arr[r]
            if (sum === target) {
                trips.push([arr[i], arr[l], arr[r]])
                l++;
                r--;
            }
            else if (sum > target) {
                r--;
            }
            else {
                l++;
            }
        }
    }


    return trips
}

// console.log(threeSum([0, 0, 0]))

function normalize(result) {
    return result
        .map((triplet) => [...triplet].sort((a, b) => a - b))
        .sort((a, b) => {
            if (a[0] !== b[0]) return a[0] - b[0];
            if (a[1] !== b[1]) return a[1] - b[1];
            return a[2] - b[2];
        });
}

const testCases = [
    {
        nums: [-1, 0, 1, 2, -1, -4],
        expected: [[-1, -1, 2], [-1, 0, 1]]
    },
    {
        nums: [0, 1, 1],
        expected: []
    },
    {
        nums: [0, 0, 0],
        expected: [[0, 0, 0]]
    },
    {
        nums: [0, 0, 0, 0],
        expected: [[0, 0, 0]]
    },
    {
        nums: [-2, 0, 0, 2, 2],
        expected: [[-2, 0, 2]]
    },
    {
        nums: [-2, -1, 0, 1, 2],
        expected: [
            [-2, 0, 2],
            [-1, 0, 1]
        ]
    },
    {
        nums: [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6],
        expected: [
            [-4, -2, 6],
            [-4, 0, 4],
            [-4, 1, 3],
            [-4, 2, 2],
            [-2, -2, 4],
            [-2, 0, 2]
        ]
    },
    {
        nums: [1, 2, 3, 4, 5],
        expected: []
    },
    {
        nums: [-5, -4, -3, -2, -1],
        expected: []
    },
    {
        nums: [-1, -1, -1, 2, 2],
        expected: [[-1, -1, 2]]
    },
    {
        nums: [-3, 0, 1, 2, -1, 1, -2],
        expected: [
            [-3, 1, 2],
            [-2, 0, 2],
            [-2, 1, 1],
            [-1, 0, 1]
        ]
    },
    {
        nums: [-2, 0, 1, 1, 2],
        expected: [
            [-2, 0, 2],
            [-2, 1, 1]
        ]
    }
];

for (const { nums, expected } of testCases) {
    const actual = threeSum(nums);

    const normalizedExpected = normalize(expected);
    const normalizedActual = normalize(actual);

    const passed =
        JSON.stringify(normalizedExpected) ===
        JSON.stringify(normalizedActual);

    console.log(
        `${passed ? "✅" : "❌"} nums=${JSON.stringify(nums)}`
    );

    if (!passed) {
        console.log("Expected:", normalizedExpected);
        console.log("Actual:  ", normalizedActual);
    }
}