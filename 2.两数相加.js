/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let addOne = 0
  let sum = new ListNode('0')
  let head = sum
  while (addOne || l1 || l2) { // addOne 进位
      let val1 = l1 !== null ? l1.val : 0
      let val2 = l2 !== null ? l2.val : 0
      let _sum = val1 + val2 + addOne
      addOne = _sum >= 10 ? 1 : 0
      sum.next = new ListNode(_sum % 10)
      sum = sum.next
      if (l1) l1 = l1.next 
      if (l2) l2 = l2.next 
  }
  return head.next
};
// var addTwoNumbers = function(l1, l2) {
//   // 创建一个哑结点，固定头指针用的
//   let ans = new ListNode(Number.MAX_VALUE)
//   // 让temp跟ans指向同一个地址空间（引用传递）
//   let temp = ans
//   let bit = 0
//   while(l1 || l2){
//       // l1当前值 + l2当前值 + 进位
//       const val = (l1?.val || 0) + (l2?.val || 0) + bit
//       // 进位符，取整的意思，同（Math.floor(val / 10)）
//       bit = val / 10 >> 0
//       // 每次往当前节点的next追加元素（因为我们创建了哑结点，所以可以直接用next，无须判断）
//       temp.next = new ListNode(val % 10)
//       // 指针移动到下一个节点
//       temp = temp.next

//       if(l1){
//           l1 = l1.next
//       }
//       if(l2){
//           l2 = l2.next
//       }
//   }
//   // 如果进位符还有值,就必须追加，例如[5],[5]
//   if(bit){
//       temp.next = new ListNode(bit)
//   }
//   return ans.next
// };


// @lc code=end

