/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let results = []
    nums.sort((a,b) => a -b)
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue;
        let fixed = nums[i]
        let start = i+1
        let end = nums.length-1; 

        while(start < end){
            let currentSum = fixed + nums[start] + nums[end];
            if(currentSum == 0) {
                results.push([fixed, nums[start], nums[end]])
                while(nums[start] == nums[start+1]) start++
                while(nums[end] == nums[end+1]) end--;
                start++
                end--
            } else if(currentSum > 0){
                end--
            } else{
                start++
            }
        }

    }

    return results;
};


console.log(threeSum([-1,0,1,2,-1,-4]))