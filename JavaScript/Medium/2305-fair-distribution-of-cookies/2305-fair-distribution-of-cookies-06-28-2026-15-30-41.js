/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    let children = Array(k).fill(0)
    let result = Infinity

    function backTrack(idx){
        if(idx == cookies.length){
            result = Math.min(result, Math.max(...children))
            return
        }

        for(let child = 0; child < children.length; child++){
            children[child] += cookies[idx]

            backTrack(idx+1)

            children[child] -= cookies[idx]
        }
    }
    backTrack(0)
    return result
};