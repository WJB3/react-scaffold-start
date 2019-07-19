var loaderUtils=require("loader-utils");

module.exports=function(context,map){
    console.log('我进来了')
 
    console.log(`map ${map}`);
    var query=loaderUtils.getOptions(this)||{};
    var moduleMode=query.modules;//是否开启了cssmodule
    var camelCaseKeys=query.camelCase;
    var sourceMap=query.sourceMap||false;
    console.log(sourceMap);
    return 'aa';
}