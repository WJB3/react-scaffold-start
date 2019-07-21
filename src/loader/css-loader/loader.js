var loaderUtils=require("loader-utils");
var processCss=require("./processCss");
var getImportPrefix=require("./getImportPrefix");

module.exports=function(context,map){
    
    var callback=this.async();
    var query=loaderUtils.getOptions(this)||{};
    var moduleMode=query.modules;//是否开启了cssmodule
    var camelCaseKeys=query.camelCase;//是否开启驼峰
    var sourceMap=query.sourceMap||false;//是否开启了sourceMap
    
    processCss(context,map,{
        mode:moduleMode?"local":"global",
        from:loaderUtils.getRemainingRequest(this).split("!").pop(),
        to:loaderUtils.getCurrentRequest(this).split("!").pop(),
        query:query,
        loaderContext:this,
        sourceMap:sourceMap
    },function(err,result){
        if(err) return callback(err);
        var cssAsString=JSON.stringify(result.source);

        //for importing css
        var importUrlPrefix=getImportPrefix(this,query);
    })

    return 'aa';
}