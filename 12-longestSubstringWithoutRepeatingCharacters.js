// Input:
s = "abcabcbb"  //8
// "01234567"
// s= "bbbbbbbb"

// Output:
// 3


function longestSubstringWithoutRepeatingCharacters(s) {
    // BruteForce

    let substrs = []
    let max = 0;

    for (let i = 1; i <= s.length; i++) {

        for (let j = 0; j <= s.length - i; j++) {
            let substr = ''
            let substrSet = new Set();
            for (let k = j; k < j + i; k++) {
                substr += s[k];
                substrSet.add(s[k])
            }
            if (substrSet.size === substr.length) {
                max = Math.max(max, substr.length)
            }
            substrs.push(substr)
        }
    }
    return max;
    return substrs;
}


console.log(longestSubstringWithoutRepeatingCharacters(s))