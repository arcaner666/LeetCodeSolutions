/*
Problem 66 

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
The digits are stored such that the most significant digit is at the head of the list,
and each element in the array contain a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

// Solution 66
var dizi = [3, 5, 6, 4, 9];
function birEkle(dizi) {
  for(var i = dizi.length - 1; i >= 0; i--){
    if(++dizi[i] > 9) dizi[i] = 0;
    else return dizi;
  }
  dizi.unshift(1);
  return dizi;
};
console.log(birEkle(dizi));