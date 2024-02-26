
//smallest element in array greater than or equal to target
const ceiling = (arr, t) => {
    let s = 0,
        e = arr.length - 1;

    while (s <= e) {
        const m = Math.floor((s + e) / 2);

        if (arr[m] === t) {
            return m;
        } else if (arr[m] < t) {
            s = m + 1;
        } else {
            e = m - 1;
        }
    }
    return s;
};

console.log(ceiling([2, 3, 5, 9, 14, 16, 18], 15)); // Output should be the index of 14 in the array
