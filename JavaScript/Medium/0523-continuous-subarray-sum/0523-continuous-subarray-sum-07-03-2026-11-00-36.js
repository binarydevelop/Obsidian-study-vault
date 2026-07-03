/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let map = new Map()
    let cumulativeSum = 0
    map.set(0, -1)

    for(let i = 0; i<nums.length; i++){
        cumulativeSum += nums[i]

        let remainder = cumulativeSum % k;
        if(map.has(remainder)){
           if (i - map.get(remainder) >= 2) {
                return true
            }
        } else {
            map.set(remainder, i)
        }
    }

    return false
};
let nums = [23,2,4,6,7]
let k = 6
console.log(checkSubarraySum(nums, k))