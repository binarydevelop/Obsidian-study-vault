/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i<nums.length; i++){
        let currentDiff = target - nums[i]
        if(map.has(currentDiff)){
            return [i, map.get(currentDiff)]
        }
        map.set(nums[i], i)
    }

    return -1
};