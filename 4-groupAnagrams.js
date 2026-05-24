function groupAnagrams(strs) {
    let hashMap = new Map();


    for (let str of strs) {

        let count = new Array(26).fill(0);

        for (let char of str) {
            let indexOfCharacter = char.charCodeAt(0) - 97
            count[indexOfCharacter] = count[indexOfCharacter] + 1
        }
        let joinedCount = count.join('')
        if (hashMap.has(joinedCount)) {
            hashMap.get(joinedCount).push(str);
        }
        else {
            hashMap.set(joinedCount, [str])
        }


    }
    return [...hashMap.values()]
    let opArray = [];
    for (let [key, value] of hashMap) {
        opArray.push(value)
    }
    return opArray;

}

Input:
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

Output:
[
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"]
]

console.log(groupAnagrams(strs));
