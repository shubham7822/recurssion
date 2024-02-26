// // Initialize an empty array to store permutations
// let result = [];

// const app = document.getElementsByClassName("before")
// const after =  document.getElementsByClassName("after")
// // Complete the DFS function
// function dfs(i, nums, slate) {
//     // Base case: If we've reached the end of the array, add the current permutation to the result
//     if (i === nums.length) {
//         debugger
//         result.push(slate.slice()); // Make a copy of the current permutation and add it to the result
//         return; // Terminate the current branch of recursion
//     }

//     // Iterate through elements starting from index i
//     for (let j = i; j < nums.length; j++) {
//         // Swap elements at indices i and j
//         debugger
//         [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap elements

//         // Recur with the next index, passing a new array with the current permutation
//         dfs(i + 1, nums, slate.concat(nums[i]));


//           debugger
//           console.log(i,j,"i and j")
//         // Backtrack: Restore the original state by swapping elements back
//         console.log("before nums", nums);
//         [nums[i], nums[j]] = [nums[j], nums[i]]; 
//         console.log("after nums", nums);
//         after.innerHtml = nums.join("") 
//         // Backtrack: Restore original state
//     }
// }

// // Example usage:
// const nums = [1, 2, 3];
// const slate = [];
// dfs(0, nums, slate);

// // Print the result
// console.log(result);
