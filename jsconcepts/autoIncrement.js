const autoIncrement = () => {
  let intervalId =  null
   let count = 0
  function startTimer(val){
      intervalId = setInterval(() => {
          console.log(count)
          count+= val
      },1000)   
    }

    function stoptimer(){
        if(intervalId){
            clearInterval(intervalId)
            intervalId = null
        }
    }
   
    return {
        startTimer,
        stoptimer
    }
}

c
