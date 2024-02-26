const smallest =(arr,t) => {
    let s = 0,
    e = arr.length - 1;

while (s <= e) {
    const m = Math.floor((s + e) / 2);

     if (arr[m] <= t) {
        s = m + 1;
    } else {
        e = m - 1;
    }
}
return arr[s % arr.length];
}

console.log(smallest(["c","f","j"],"a"))