/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let results = []
    function backTrack(path, idx){
        if(idx == nums.length) {
            results.push([...path])
            return
        }

        path.push(nums[idx])
        backTrack(path, idx+1)
        path.pop()
        backTrack(path, idx+1)
    }

    backTrack([], 0)
    return results
};