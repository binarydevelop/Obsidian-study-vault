/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = []

    function backTrack(current, openCount, closeCount){
        if(current.length == 2 * n) {
            result.push(current)
            return
        }

        if(openCount < n){
            backTrack(current + '(', openCount+1, closeCount)
        }

        if(closeCount < openCount){
            backTrack(current + ')', openCount, closeCount+1)
        }
    }

    backTrack('', 0, 0)

    return result;
};