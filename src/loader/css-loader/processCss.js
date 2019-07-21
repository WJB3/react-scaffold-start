var postcss=require('postcss');
var modulesValues=require('postcss-modules-values');
var getLocalIdent=require("./getLocalIdent");
var localByDefault=require("postcss-modules-local-by-default");
var extractImports=require("postcss-modules-extract-imports");

module.exports=function processCss(inputSource,inputMap,options,callback){
    console.log("processCss")
    var query=options.query;
    var context=query.context;
    var localIdentName=query.localIdentName||"[hash:base64]";
    console.log("localIdentName"+localIdentName);
    var localIdentRegExp=query.localIdentRegExp;
    console.log("localIdentRegExp"+localIdentRegExp);
    var customGetLocalIdent=query.getLocalIdent||getLocalIdent;
    console.log("customGetLocalIdent"+customGetLocalIdent);
    
    var parserOptions={
        mode:options.mode,
        url:query.url!==false,
        import:query.import!==false,
        resolve:options.resolve
    };

    var pipeline=postcss([
        modulesValues,
        localByDefault({
            mode:options.mode,
            rewriteUrl:function(global,url){
                if(parserOptions.url){
                    url=url.trim();
                    if(!url.replace(/\s/g,'').length ||!loaderUtils.isUrlRequest(url)){
                        return url;
                    }
                    if(global){
                        return loaderUtils.urlToRequest(url);
                    }
                }
                return url;
            }
        }),
        extractImports(),
        modulesScope({
            generateScopedName:function generateScopedName(exportName){
                return customGetLocalIdent(options.loaderContext,localIdentName,exportName,{
                    regExp:localIdentRegExp,
                    hashPrefix:query.hashPrefix||"",
                    context:context
                });
            }
        })
    ])
}