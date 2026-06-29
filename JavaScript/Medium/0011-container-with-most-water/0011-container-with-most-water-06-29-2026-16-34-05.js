/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0
    let start = 0
    let end = height.length - 1

    while(start < end){
        let length = Math.min(height[start], height[end])
        let width = end - start 
        let area = length * width
        maxArea = Math.max(area, maxArea)

        if(height[start] < height[end]){
            start++;
        } else {
            end--;
        }
    } 

    return maxArea
};