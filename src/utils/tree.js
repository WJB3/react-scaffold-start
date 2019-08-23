import { isArray,isObject } from './helper';

/**
 * 替换树性结构中的字段名 
 * */
function replaceFields(target){
    
    target.forEach(element=>{
        if(element.id){
            element.value=element.id;
            delete element['id'];
        }
        if(element.name){
            element.label=element.name;
            delete element['name'];
        }
        if(element.sonindustry){
            element.children=element.sonindustry;
            delete element['sonindustry'];
        }
        if(element.children && isArray(element.children)){
            replaceFields(element.children)
        }
    })

    return target;
}

/**
 * 将平铺树形结构转化为树形结构
 */
function transformTreeStruct(target,parent_id){
    let tree=[];
    let temp;
    target.forEach(element=>{
        if(element.parent_id==parent_id){
            let obj=element;
            temp=transformTreeStruct(target,obj.id)
            if(temp.length>0){
                obj.children=temp;
            }
            tree.push(obj)
        }
    })
    return tree;
}

export {
    replaceFields,
    transformTreeStruct
}