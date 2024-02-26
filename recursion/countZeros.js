const countZeros = (num,c) => {
  if(num === 0){
    return c
  }

  const rem  = num %10
  if(rem === 0){
  return countZeros(Math.floor(num/10),c+1)
  }
    return countZeros(Math.floor(num/10),c)


}

console.log(countZeros(1090000000045,0))