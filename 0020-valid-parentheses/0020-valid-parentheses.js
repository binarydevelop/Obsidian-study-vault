/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let bracketMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    let stack = []

    for(let ch of s){
        if(bracketMap[ch]){
            stack.push(bracketMap[ch])
        } else {
            let elem = stack.pop()
            if(elem !== ch) return false
        }
    }

    return stack.length === 0 

};