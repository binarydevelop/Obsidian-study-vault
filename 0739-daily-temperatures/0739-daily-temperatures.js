/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = []
    let results = Array(temperatures.length).fill(0)
    for(let i = 0; i< temperatures.length; i++){
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]){
            let prevIndex = stack.pop()
            results[prevIndex] = i - prevIndex
        }
        stack.push(i)
    }
    return results
}