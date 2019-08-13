var loaderUtils=require("loader-utils");
var path=require("path");

module.exports=function getLocalIdent(loaderContext,localIdentName,localName,options){
 
    if(!options.context){
        if(loaderContext.rootContext){
            //rootContext 项目根路径 E:\\react-scaffold-start
            options.context=loaderContext.rootContext;
        }else if(loaderContext.options && typeof loaderContext.options.context==="string"){
            //从webpack 4开始，以前this.options.context提供为this.rootContext。
            options.context=loaderContext.options.context;
        }else{
            options.context=loaderContext.context;
        }
    }
    var request=path.relative(options.context,loaderContext.resourcePath);
    //options.context为 E:\react-scaffold-start
    //resourcePath为E:\react-scaffold-start\src\routes\App.css   
 
    //request 为 src\routes\App.css   

    options.content=options.hashPrefix+request+"+"+localName;
    localIdentName=localIdentName.replace(/\[local\]/gi,localName);

    console.log("localIdentName")
    console.log(localIdentName)
    var hash = loaderUtils.interpolateName(loaderContext, localIdentName, options);
    console.log("hash")
    console.log(hash)
    console.log(hash.replace(new RegExp("[^a-zA-Z0-9\\-_\u00A0-\uFFFF]", "g"), "-").replace(/^((-?[0-9])|--)/, "_$1"))
	return hash.replace(new RegExp("[^a-zA-Z0-9\\-_\u00A0-\uFFFF]", "g"), "-").replace(/^((-?[0-9])|--)/, "_$1");
    
}