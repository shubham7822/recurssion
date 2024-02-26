function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if the left index is greater than the right index, target not found
    if (left > right) {
        debugger
        return -1;
    }

    // Find the middle index
    const mid = Math.floor((left + right) / 2);

    // If the middle element is the target, return its index
    if (arr[mid] === target) {
       debugger
        return mid;
    }
     
    debugger
    // If the target is less than the middle element, search the left half
    if (target < arr[mid]) {
        debugger
        console.log(mid-1,left)
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
    // If the target is greater than the middle element, search the right half
    else {
        debugger
        console.log(mid+1,right)
        return binarySearchRecursive(arr, target, mid + 1, right);
    }
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 11;
const index = binarySearchRecursive(arr, target);
console.log("Index of", target, "is", index);
