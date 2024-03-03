const segregate = (arr) => {
  return  arr.reduce((acc,curr) => {
        const flored = Math.floor(curr)
        if(!acc[flored]){
            acc[flored] = []
        }
        acc[flored].push(curr)
        return acc
    },{})
}

console.log(segregate([1.1,1.2,2.1,2.2,3.1,3.4]))
