const linearSearch = (arr,target) => {
    const slate = []
    return helper(arr,target,0,slate)
}

const helper = (arr,target,i,slate) => {
  
    if(arr.length === i){
        debugger
        return slate
    }

    if(arr[i] === target){
       debugger
        slate.push(i)
    }

    if(arr.length !== i) console.log(i,"winding")
   if(arr.length === i ) console.log(i,"unwinding")
    return helper(arr,target,i+1,slate)
}

console.log(linearSearch([33,4,5,4,5,6,7],5))