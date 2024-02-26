// const reverseeArray = (arr) => {
//     if (arr.length === 0) {
//         debugger
//         return arr;
//     }

//     debugger
//     let temp = arr.pop();
//     reverseeArray(arr);
//     arr.unshift(temp)

//     return arr
    
// // }

// const reverseeArray = (arr, start, end) => {
//     if (start >= end) {
//         return arr;
//     }

//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     reverseeArray(arr, start + 1, end - 1);
//     return arr;
// }

// console.log(reverseeArray([4, 5, 6, 7, 8], 0, 4));