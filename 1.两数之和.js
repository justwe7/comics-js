/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if(!nums) return [];
  // 创建字典表
  const m = new Map();
  // 遍历nums数组
  for(let i = 0; i < nums.length; i++){
    // 获取当前值
    const n = nums[i];
    // 获取对当前与该值匹配的数值
    const n2 = target - nums[i];
    // 判断目标值是否在字典中
    if(m.has(n2)){
      // 是，在返回目标值的坐标和当前数值的坐标
      return [m.get(n2),i]
    }
    // 不在字典中，则放入字典，key为数值，value为下标
    m.set(n,i)
  }
};
// @lc code=end

