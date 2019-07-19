var postcss=require('postcss');
var modulesValues=require('postcss-modules-values');

module.exports=function processCss(inputSource,inputMap,options,callback){
    var query=options.query;
    var context=query.context;
    var localIdentName=query.localIdentName||"[hash:base64]";
    var localIdentRegExp=query.localIdentRegExp;

    var customGetLocalIdent=query.getLocalIdent||getLocalIdent;

    var parserOptions={
        mode:options.mode,
        url:query.url!==false,
        import:query.import!==false,
        resolve:options.resolve
    };

    var pipeline=postcss([
        modulesValue,
        
    ])
}