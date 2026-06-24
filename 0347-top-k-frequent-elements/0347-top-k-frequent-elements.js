/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    let results = []
    for(let num of nums){
        map.set(num, (map.get(num)||0) + 1)
    }
    let buckets = Array.from({length: nums.length+1}, ()=>[])

    for(let [num, freq] of map){
        buckets[freq].push(num)
    }

    for(let i =buckets.length-1; i>=0; i--){
        results.push(...buckets[i])
        if(results.length == k) return results
    }
};