function isArray(value){
    if(typeof Array.isArray==="function"){
        return Array.isArray(value);
    }else{
        return Object.prototype.toString.call(value)==="[Object Array]";
    }
}

function isObject(value){
    return Object.prototype.toString.call(value)==="[Object Object]";
}

export {
    isArray,
    isObject
}