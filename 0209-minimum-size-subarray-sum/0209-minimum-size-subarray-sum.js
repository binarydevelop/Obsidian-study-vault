/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity
    let start = 0
    let currentSum = 0
    for(let end = 0; end < nums.length; end++){
        currentSum += nums[end]
        while(currentSum >= target){
            minLength = Math.min(minLength,(end - start)+ 1)
            currentSum -= nums[start]
            start++
        }
    }
    return minLength == Infinity ? 0 : minLength;
};