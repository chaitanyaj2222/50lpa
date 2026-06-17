function checkPalindrome(s) {
    const sLength = s.length;
    r = sLength - 1;
    l = 0
    if (l === r) {
        return true
    }

    const validateIfCharacter = (char) => {
        let charCode = char.charCodeAt(0)
        if ((charCode > 96 && charCode < 123) || (charCode > 64 && charCode < 91) || (charCode > 47 && charCode < 58)) {
            return true;
        }
        return false;

    }
    while (r > l) {
        while (r > l && !validateIfCharacter(s[l])) {
            l++;
        }

        while (r > l && !validateIfCharacter(s[r])) {
            r--;
        }

        if (s[l].toLowerCase() === s[r].toLowerCase()) {
            l++;
            r--;
            continue
        }
        else {
            return false;
        }

    }
    return true;
}

// let str = "A man, a plan, a canal: Panama";
// console.log(checkPalindrome(str));

const testCases = [
  ["A man, a plan, a canal: Panama", true],
  ["race a car", false],
  [" ", true],
  ["a", true],
  ["aa", true],
  ["ab", false],
  ["aba", true],
  ["abba", true],
  ["abcba", true],
  ["abccba", true],
  ["abc", false],
  ["0P", false],
  ["A,b,a", true],
  ["Madam", true],
  ["No lemon, no melon", true],
  ["Was it a car or a cat I saw?", true],
  ["Never odd or even", true],
  ["12321", true],
  ["123321", true],
  ["123421", false],
  ["1a2", false],
  ["1a1", true],
  [".,!?", true],
  ["ab@#ba", true],
  ["ab@#ca", false],
  ["Able was I, ere I saw Elba", true],
];

for (const [input, expected] of testCases) {
  const actual = checkPalindrome(input);

  console.log({
    input,
    expected,
    actual,
    passed: actual === expected ? '✅' : '❌',
  });
}