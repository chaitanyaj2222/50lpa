function fruitsInBasket(s) {
    let map = new Map();
    let l = 0;
    let r = 0;
    const sLength = s.length;
    let maxLen = -Infinity
    while (r < sLength) {
        map.set(s[r], (map.get(s[r]) || 0) + 1);
        if (map.size > 2) {
            while (map.size > 2) {
                const lValue = map.get(s[l]);
                if (lValue === 1) {
                    map.delete(s[l])
                }
                else {
                    map.set(s[l], lValue - 1)
                }
                l++;
            }
        }
        if (map.size === 2) {
            maxLen = Math.max(r - l + 1, maxLen);
        }
        r++;

    }
    return Math.max(r - l, maxLen)
}


console.log(fruitsInBasket([1, 2, 1])); // 3

console.log(fruitsInBasket([0, 1, 2, 2])); // 3

console.log(fruitsInBasket([1, 2, 3, 2, 2])); // 4

console.log(fruitsInBasket([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])); // 5

console.log(fruitsInBasket([1])); // 1

console.log(fruitsInBasket([1, 1, 1, 1])); // 4

console.log(fruitsInBasket([1, 2])); // 2

console.log(fruitsInBasket([1, 2, 1, 2, 1, 2])); // 6

console.log(fruitsInBasket([1, 2, 3, 4, 5])); // 2

console.log(fruitsInBasket([1, 2, 3, 1, 2, 2])); // 3

console.log(fruitsInBasket([0, 0, 1, 1, 2, 2])); // 4

console.log(fruitsInBasket([2, 2, 3, 3, 3, 2, 2])); // 7

console.log(fruitsInBasket([3, 3, 1, 2, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4])); // 8