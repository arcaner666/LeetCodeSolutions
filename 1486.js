/*
Problem 1486

Given an integer n and an integer start.

Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.

Example 1:

Input: n = 5, start = 0
Output: 8
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.

Example 2:
Input: n = 4, start = 3
Output: 8
Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.
Example 3:
*/

// Solution 1486

var n = 5;
var baslangic = 0;

function xorOperasyonu(n, baslangic) {
    let sayilar = [];
    let sonuc = 0;
    for(let i = 0; i < n; i++){
        sayilar[i] = baslangic + 2 * i;
    }
    sonuc = baslangic;
    for(let i = 1; i < n; i++){
        sonuc = sonuc ^ sayilar[i];
    }
    return sonuc;
};

console.log(xorOperasyonu(n, baslangic));