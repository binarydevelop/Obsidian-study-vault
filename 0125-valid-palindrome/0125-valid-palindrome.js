/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /[^a-z0-9A-Z]/g
    
    s = s.replace(regex,'').toLowerCase()
    let start =0 
    let end = s.length-1

    while(start<=end){
        if(s[start] !== s[end]){ 
            return false
        }
        start++
        end--
    }
    return true
};