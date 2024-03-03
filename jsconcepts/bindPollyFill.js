Function.prototype.MyBind = function(context,args){

    if(typeof cb !== "function"){
        return "i know how bad you are with js"
    }
    context.fn = this
   
   return function(){
    context.fn(...args)
   }
}