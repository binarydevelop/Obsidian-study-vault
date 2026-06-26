/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
  const path = [];

  function backtrack(index) {
    if (index === nums.length) {
      result.push([...path]);
      return;
    }

    // Choice 1: skip nums[index]
    backtrack(index + 1);

    // Choice 2: take nums[index]
    path.push(nums[index]);
    backtrack(index + 1);
    path.pop();
  }

  backtrack(0);
  return result;
};