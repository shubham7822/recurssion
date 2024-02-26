function mergeSort(arr) {
    // Base case: If the array has 0 or 1 element, it is already sorted
    if (arr.length <= 1) {
        debugger
        return arr;
    }

    // Find the middle index of the array
    const mid = Math.floor(arr.length / 2);


    // Divide the array into two halves
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);
     debugger

     console.log(leftHalf,rightHalf,"test>>>>")
    // Recursively sort the two halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from the left and right arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Append any remaining elements from the left and right arrays
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Example usage:
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArr = mergeSort(arr);
console.log("Sorted array:", sortedArr);
