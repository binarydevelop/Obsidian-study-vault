/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let results = []

    function backTrack(idx, path){
            results.push([...path])



        //check all elements for their subsets
        for(let i = idx; i< nums.length;i++){
            path.push(nums[i])
            backTrack(i+1, path)
            path.pop()
        }

    }

    backTrack(0, [])

    return results
};