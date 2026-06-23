/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let results = []
    for(let str of strs){
        let key = str.split('').sort().join()
        if(!results[key]){
            results[key] = []
        }
        results[key].push(str)
    }
    return Object.values(results)
};