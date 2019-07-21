var loaderUtils=require("loader-utils");
var path=require("path");

module.exports=function getLocalIdent(loaderContext,localIdentName,localName,options){

    console.log("loaderContext"+loaderContext+"<br />")
    console.log("localIdentName"+localIdentName+"<br />")
    console.log("localName"+localName+"<br />")
    console.log("options"+options+"<br />")
    if(!options.context){
        if(loaderContext.rootContext){
            options.context=loaderContext.rootContext;
        }else if(loaderContext.options && typeof loaderContext.options.context==="string"){
            options.context=loaderContext.options.context;
        }else{
            options.context=loaderContext.context;
        }
    }
    var request=path.relative(options.context,loaderContext.resourcePath);
    options.content=options.hashPrefix+request+"+"+localName;
    localIdentName=localIdentName.replace(/\[local\]/gi,localName);
    
}