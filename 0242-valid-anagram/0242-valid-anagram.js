/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map()

    for(const ch of s) map.set(ch, (map.get(ch) || 0) + 1)
    for(const ch of t) map.set(ch, (map.get(ch) || 0 ) -1)

    for(const v of map.values()){
        if(v !== 0) return false
    }

    return true
};