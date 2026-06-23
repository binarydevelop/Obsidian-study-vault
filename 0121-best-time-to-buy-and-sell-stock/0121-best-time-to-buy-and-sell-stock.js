/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(nums) {
    let maxProfit = 0
    let minPrice = nums[0]
    for(let i = 1; i< nums.length; i++){
        let profit = nums[i] - minPrice
        if(nums[i] < minPrice){
            minPrice = nums[i]
        }
    maxProfit = Math.max(maxProfit, profit)
    }

    return maxProfit
};