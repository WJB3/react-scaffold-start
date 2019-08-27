/**
 * 计算一个字符串内字母出现的最大次数 并且找出是哪一个字符
 */

function findMaxStrNumber(str){
    let obj={};
    str.split("").forEach(item=>{
        if(obj[item]){
            obj[item]++;
        }else {
            obj[item]=1;
        }
    })
    let keys=Object.keys(obj);
    let values=Object.values(obj);
    let maxValue=Math.max(...values);
    console.log(`字符串内出现最多次数的字符是${keys[values.indexOf(maxValue)]},次数是${maxValue}`)
}

/**
 * 给定一个数组和一个值，找出数组内2数之和等于目标值的2个值的下标,且不能为2数相同
 * target=8
 * array=[1,7,8,6,9]
 * return [0,1]
 */

function findIndexOfTarget(arr,target){
     let obj={};
     for(let i=0;i<arr.length;i++){
        obj[arr[i]]=i;
     }
     for(let j=0;j<arr.length;j++){
        if(obj[target-arr[j]] && j!==obj[target-arr[j]]){
            return [obj[target-arr[j]],j].sort((a,b)=>a>b);
        }
        return [];
     }
}

/**
 * 给定一个二进制数组， 计算其中最大连续1的个数。
 * @param {*} nums 
 */
function findMaxConsecutiveOnes(nums){
    let newarr=[];
    let max=0;
    nums.forEach(item=>{
        if(item===1){
            newarr.push(item)
        }else if(item===0){
            newarr=[];
        }
        max=Math.max(max,newarr.length);
    })
    return max;
}
 


export {
    findMaxStrNumber,
    findIndexOfTarget,
    findMaxConsecutiveOnes
}