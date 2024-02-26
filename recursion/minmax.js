const minmax = (arr,n) => {

    if(n === arr.length){
        return arr[n - 1]
    }
 
    return Math.min(arr[n], minmax(arr,n + 1))


}

console.log(minmax([4,990,0,6,7,8,9],0))