function evalRPN(arr) {
    let stack = [];
    let first = null;
    let second = null;
    let result = null
    let set = new Set();
    set.add("+");
    set.add("-")
    set.add("*")
    set.add("/")
    for (let each of arr) {

        if (set.has(each)) {
            second = Number(stack.pop());
            first = Number(stack.pop());
            if (each === "+") {
                result = first + second
            }
            else if (each === "-") {
                result = first - second
            }
            else if (each === "/") {
                result = Math.trunc(first/second)
            }
            else if (each === "*") {
                result = first * second
            }
            stack.push(result)
        }
        else {
            stack.push(each)
        }
    }
    return stack.pop()
}

const testCases = [
    {
        tokens: ["2", "1", "+", "3", "*"],
        expected: 9
    },
    {
        tokens: ["4", "13", "5", "/", "+"],
        expected: 6
    },
    {
        tokens: ["3", "4", "+"],
        expected: 7
    },
    {
        tokens: ["10", "5", "-"],
        expected: 5
    },
    {
        tokens: ["2", "5", "-"],
        expected: -3
    },
    {
        tokens: ["8", "2", "/"],
        expected: 4
    },
    {
        tokens: ["2", "8", "/"],
        expected: 0
    },
    {
        tokens: ["5", "0", "*"],
        expected: 0
    },
    {
        tokens: ["0", "5", "-"],
        expected: -5
    },
    {
        tokens: ["-2", "3", "*"],
        expected: -6
    },
    {
        tokens: ["7", "-3", "/"],
        expected: -2
    },
    {
        tokens: ["-7", "3", "/"],
        expected: -2
    },
    {
        tokens: ["3", "4", "+", "2", "*", "7", "/"],
        expected: 2
    },
    {
        tokens: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"],
        expected: 22
    }
];

for (const { tokens, expected } of testCases) {
    const actual = evalRPN(tokens);
    const passed = actual === expected;

    console.log(`${passed ? "✅" : "❌"} tokens = ${JSON.stringify(tokens)}`);

    if (!passed) {
        console.log(`   Expected: ${expected}`);
        console.log(`   Actual:   ${actual}`);
    }
}