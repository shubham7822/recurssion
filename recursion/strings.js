
// const str  = (p,up) => {
//     if(up.length === 0){
//         debugger
//         return ""
//     }
 
//    const ch = up.charAt(0)
 
//    debugger
//    if(ch === "a"){
//       return str(p,up.substring(1))
//    }else{
//       return str(ch + p, up.substring(1))
//    }
//  }

//  console.log(str("","bbacca"))

const subsets = (p, up) => {
   let list = [];

   // Base case: when there are no more characters to process in 'up'
   if (up.length === 0) {
      debugger
       // Push the current subset 'p' into the list
       list.push(p);
       return list;
   }

   let ch = up.charAt(0);
    debugger
   // Generate subsets including the current character 'ch'
   let subsetsIncludingCh = subsets(p + ch, up.substring(1));

   // Generate subsets excluding the current character 'ch'
   let subsetsExcludingCh = subsets(p, up.substring(1));

   // Concatenate subsets including 'ch' and excluding 'ch'
   list = list.concat(subsetsIncludingCh, subsetsExcludingCh);

   return list;
};

console.log(subsets("", "ab"));
