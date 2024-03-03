Function.prototype.MyApply = function(context,args){

    if(typeof cb !== "function"){
        return "i know how bad you are with js"
    }
    context.fn = this
    context.call(...args)
}