/**
 * 判断是否是数组
 * @param {*} value 
 */

function isArray(value){
    if(typeof Array.isArray==="function"){
        return Array.isArray(value);
    }else{
        return Object.prototype.toString.call(value)==="[Object Array]";
    }
}

/**
 *  判断是否是对象 
 * @param {*} value 
 */

function isObject(value){
    return Object.prototype.toString.call(value)==="[Object Object]";
}

export {
    isArray,
    isObject
}