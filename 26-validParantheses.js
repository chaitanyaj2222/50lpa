function validParantheses(str) {
    let arr = [];
    let map = new Map([
        ["{", "}"],
        ["(", ")"],
        ["[", "]"]
    ])
    let arrLength = str.length;
    let r = 0;
    while (r < arrLength) {
        if (map.has(str[r])) {
            arr.push(str[r]);
            r++;
        }
        else {
            let poppedValue = arr.pop();
            if (map.get(poppedValue) === str[r]) {
                r++
            }
            else {
                return false;
            }
        }
    }
    if (arr.length === 0) {
        return true;

    } return false

}

const testCases = [
    { s: "()", expected: true },
    { s: "()[]{}", expected: true },
    { s: "(]", expected: false },
    { s: "([)]", expected: false },
    { s: "{[]}", expected: true },
    { s: "((()))", expected: true },
    { s: "((())", expected: false },
    { s: "]", expected: false },
    { s: "[", expected: false },
    { s: "{", expected: false },
    { s: "", expected: true },
    { s: "{{{{}}}}", expected: true },
    { s: "{[()]}", expected: true },
    { s: "{[(])}", expected: false }
];

for (const { s, expected } of testCases) {
    const actual = validParantheses(s);

    const passed = actual === expected;

    console.log(
        `${passed ? "✅" : "❌"} s="${s}" | Expected: ${expected} | Actual: ${actual}`
    );
}