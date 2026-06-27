/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let results = []
    let current = ''
    let openCount = 0
    let closeCount = 0 
    function backTrack(current, openCount, closeCount){
        if(current.length == 2 * n) {
            results.push(current)
        }

        if(openCount < n){
            backTrack(current+'(', openCount+1, closeCount)
        }

        if(closeCount < openCount){
            backTrack(current+')', openCount, closeCount+1)
        }
    }
    backTrack('',0, 0)

    return results
};