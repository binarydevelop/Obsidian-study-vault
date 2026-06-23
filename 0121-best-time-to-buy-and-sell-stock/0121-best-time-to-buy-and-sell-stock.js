/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(nums) {
    let minPrice = nums[0]
    let maxProfit = 0
    for(let i = 1; i<nums.length; i++){
        let profit = 0
        if(nums[i] < minPrice){
            minPrice = nums[i]
        }
        profit = nums[i] - minPrice
        maxProfit = Math.max(maxProfit, profit)
    }

    return maxProfit
};