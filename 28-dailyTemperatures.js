function dailyTemperatures(arr) {
    let stack = new Array();
    let opArr = new Array(arr.length).fill(0);


    stack.push(0);

    for (let i = 1; i < arr.length; i++) {
        while (stack.length) {
            if (arr[stack[stack.length - 1]] < arr[i]) {
                let j = stack.pop();
                console.log("j", j)
                opArr[j] = i - j
            }
            else {
                break;
            }
        }
        stack.push(i)
    }
    return opArr;
}

const testCases = [
    {
        temperatures: [73, 74, 75, 71, 69, 72, 76, 73],
        expected: [1, 1, 4, 2, 1, 1, 0, 0]
    },
    {
        temperatures: [30, 40, 50, 60],
        expected: [1, 1, 1, 0]
    },
    {
        temperatures: [30, 60, 90],
        expected: [1, 1, 0]
    },
    {
        temperatures: [90, 80, 70, 60],
        expected: [0, 0, 0, 0]
    },
    {
        temperatures: [50],
        expected: [0]
    },
    {
        temperatures: [],
        expected: []
    },
    {
        temperatures: [55, 55, 55],
        expected: [0, 0, 0]
    },
    {
        temperatures: [34, 80, 80, 34, 80],
        expected: [1, 0, 0, 1, 0]
    },
    {
        temperatures: [30, 40, 50, 60, 70, 80],
        expected: [1, 1, 1, 1, 1, 0]
    },
    {
        temperatures: [80, 70, 60, 50, 40, 30],
        expected: [0, 0, 0, 0, 0, 0]
    }
];

for (const { temperatures, expected } of testCases) {
    const actual = dailyTemperatures(temperatures);
    const passed = JSON.stringify(actual) === JSON.stringify(expected);

    console.log(`${passed ? "✅" : "❌"} temperatures = ${JSON.stringify(temperatures)}`);

    if (!passed) {
        console.log(`   Expected: ${JSON.stringify(expected)}`);
        console.log(`   Actual:   ${JSON.stringify(actual)}`);
    }
}