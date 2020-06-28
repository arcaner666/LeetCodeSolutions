/*
Problem 1266

On a plane there are n points with integer coordinates points[i] = [xi, yi]. 
Your task is to find the minimum time in seconds to visit all points.

You can move according to the next rules:

In one second always you can either move vertically, horizontally by one unit or diagonally 
(it means to move one unit vertically and one unit horizontally in one second).
You have to visit the points in the same order as they appear in the array.

Example 1:
Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds

Example 2:
Input: points = [[3,2],[-2,2]]
Output: 5
*/

// Solution 1266

var noktalar = [[1,1],[3,4],[-1,0]];

function enKisaSeyahatSuresi(noktalar){
    let sure = 0;
    for(let i = 0; i < noktalar.length-1; i++){
        let nokta2 = [noktalar[i+1][0],noktalar[i+1][1]]
        let konum = [noktalar[i][0],noktalar[i][1]];
        while(konum[0] != nokta2[0] || konum[1] != nokta2[1]){
            if(konum[0] < nokta2[0] && konum[1] < nokta2[1]){
                konum = [konum[0]+1,konum[1]+1];
                sure++;
            }
            else if(konum[0] > nokta2[0] && konum[1] < nokta2[1]){
                konum = [konum[0]-1,konum[1]+1];
                sure++;
            }
            else if(konum[0] > nokta2[0] && konum[1] > nokta2[1]){
                konum = [konum[0]-1,konum[1]-1];
                sure++;
            }
            else if(konum[0] < nokta2[0] && konum[1] > nokta2[1]){
                konum = [konum[0]+1,konum[1]-1];
                sure++;
            }
            else if(konum[0] < nokta2[0] && konum[1] == nokta2[1]){
                konum = [konum[0]+1,konum[1]];
                sure++;
            }
            else if(konum[0] == nokta2[0] && konum[1] < nokta2[1]){
                konum = [konum[0],konum[1]+1];
                sure++;
            }
            else if(konum[0] == nokta2[0] && konum[1] > nokta2[1]){
                konum = [konum[0],konum[1]-1];
                sure++;
            }
            else if(konum[0] > nokta2[0] && konum[1] == nokta2[1]){
                konum = [konum[0]-1,konum[1]];
                sure++;
            }
        }
    }
    return sure;
}

console.log(enKisaSeyahatSuresi(noktalar));