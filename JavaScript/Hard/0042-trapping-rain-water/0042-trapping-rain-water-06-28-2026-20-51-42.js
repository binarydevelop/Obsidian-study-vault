/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0
    let prefix = Array(height.length).fill(0)
    let suffix = Array(height.length).fill(0)
    let minUptil = Infinity
    prefix[0] = height[0]
    for(let i = 1; i< height.length; i++){
        minUptil = Math.max(prefix[i-1], height[i])
        prefix[i] = minUptil
    }
    suffix[height.length-1] = height[height.length-1]
    for(let i = height.length-2; i>= 0; i--){
        maxUptil = Math.max(suffix[i+1], height[i])
        suffix[i] = maxUptil
    }

    for(let i = 0; i < height.length; i++){
        result += Math.min(prefix[i], suffix[i]) - height[i]
    }

    return result
};