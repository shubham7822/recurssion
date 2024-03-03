const asyncSeries = (promises) => {
   const p = promises.shift()

   p.then((data) => {
        console.log(data)
       if(promises.length > 0){
        asyncSeries(promises)
       }
   })
}