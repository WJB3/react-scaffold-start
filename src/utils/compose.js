export default function composeFunction(...fns){
    return function(x){
        return fns.reduceRight(function(arg,fn){
            return fn(arg);
        },x)
    }
}