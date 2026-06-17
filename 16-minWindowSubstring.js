function mapChecker(sMap, tMap) {
    // check if all items in tMap are present in sMap;
    for (const [key, value] of tMap.entries()) {
        if (!sMap.has(key)) {
            return false;
        }
        const sMapValue = sMap.get(key);

        if (sMapValue < value) {
            return false;
        }
    }
    return true;
}

function minWindowSubstring(s, t) {

    const sLength = s.length;
    const tLength = t.length;

    let minL = sLength +1;
    let minR = sLength + 1;
    if (tLength > sLength) {
        return ""
    }
    let l = 0;
    let r = tLength - 1;

    let sMap = new Map();
    let tMap = new Map();
    for (let i = l; i <= r; i++) {
        if (sMap.has(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1);
        }
        else {
            sMap.set(s[i], 1)
        }

        if (tMap.has(t[i])) {
            tMap.set(t[i], tMap.get(t[i]) + 1);
        }
        else {
            tMap.set(t[i], 1)
        }
    }

    let minLength = sLength + 1;

    while ((r < sLength) && (r>l)) {
        if (mapChecker(sMap, tMap)) {

            if (r - l + 1 < minR - minL + 1 || (minL===sLength+1 && minR === sLength+1)) {
                minL = l;
                minR = r;
            }

            sMap.set(s[l], sMap.get(s[l])-1);
            l++;
        }
        else {
            r++;
            if (r < sLength) {
                if (sMap.has(s[r])) {
                    sMap.set(s[r], sMap.get(s[r])+1);
                }
                else {
                    sMap.set(s[r], 1);
                }
            }
        }
    }


    let returnStr = "";
    for(let i = minL;i<=minR;i++){
        returnStr += s[i]
    }
    return returnStr;


}

// const s = "ADOBECODEBANC";
// const t = "ABC"

const s = "ddaaabbcaaaa"
const t = "abc"
console.log(minWindowSubstring(s, t))
