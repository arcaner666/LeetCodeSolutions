/*
Problem 136

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
*/

// Solution 136
var dizi = [7, 7, 5, 3, 3, 1, 1];
function tekrarEtmeyenSayiyiBul(dizi) {
    const hafiza = {};
    for (n of dizi) {
        if (hafiza[n] == null) hafiza[n] = 0;
        hafiza[n]++;
    }
    for (n in hafiza) {
        if (hafiza[n] === 1) return Number(n);
    }
}
console.log(tekrarEtmeyenSayiyiBul(dizi));