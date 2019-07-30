var loaderUtils = require("loader-utils");
var processCss = require("./processCss");
var getImportPrefix = require("./getImportPrefix");
var compileExports=require("./compile-exports");

module.exports = function (context, map) {

    //context是解析的内容
    //在这里是.container{
        //color:yellow
    //}
    console.log("进入Loader")

    var callback = this.async();
    var query = loaderUtils.getOptions(this) || {};
    //query是传过来的options项

    var moduleMode = query.modules;//是否开启了cssmodule
    var camelCaseKeys = query.camelCase;//是否开启驼峰
    var sourceMap = query.sourceMap || false;//是否开启了sourceMap

    //loaderUtils.getRemainingRequest(this).split("!").pop());
    //获取处理资源的路径//E:\react-scaffold-start\src\routes\App.css

    //loaderUtils.getCurrentRequest(this).split("!").pop()
    //获取处理资源的路径//E:\react-scaffold-start\src\routes\App.css

    processCss(context, map, {
        mode: moduleMode ? "local" : "global",
        from: loaderUtils.getRemainingRequest(this).split("!").pop(),
        to: loaderUtils.getCurrentRequest(this).split("!").pop(),
        query: query,
        loaderContext: this,
        sourceMap: sourceMap
    }, function (err, result) {
        if (err) return callback(err);

        var cssAsString = JSON.stringify(result.source);
        //for importingCSS
        var importUrlPrefix = getImportPrefix(this, query);
        var alreadyImported = {};
        var importJs = result.importItems.map(function (imp) {
            imp.url = imp.url.trim();
            return imp;
        }).filter(function (imp) {
            if (!imp.mediaQuery) {
                if (alreadyImported[imp.url])
                    return false;
                alreadyImported[imp.url] = true;
            }
            return true;
        }).map(function (imp) {
            if (!loaderUtils.isUrlRequest(imp.url)) {
                return "exports.push([module.id, " +
                    JSON.stringify("@import url(" + imp.url + ");") + ", " +
                    JSON.stringify(imp.mediaQuery) + "]);";
            }else{
                var importUrl=importUrlPrefix+imp.url;
                return "exports.i(require("+loaderUtils.stringifyRequest(this,importUrl)+"), "+
                    JSON.stringify(imp.mediaQuery)+");";
            }
        },this).join("\n");

        function importItemMatcher(item){
            var match=result.importItemRegExp.exec(item);
            var idx=+match[1];
            var importItem=result.importItems[idx];
            var importUrl=importUrlPrefix+importItem.url;
            return "\"+require("+loaderUtils.stringifyRequest(this,importUrl)+").locals"+
             "["+JSON.stringify(importItem.export)+"]+\"";
        }

        cssAsString=cssAsString.replace(result.importItemRegExp,importItemMatcher.bind(this));

        var urlEscapeHelper="";

        if(query.url!==false && result.urlItems.length>0){
            urlEscapeHelper="var escape=require("+loaderUtils.stringifyRequest(this,require.resolve("./url/escape.js"))+");\n";

            cssAsString=cssAsString.replace(result.urlItemRegExpG,function(item){
                var match=result.urlItemRegExp.exec(item);
                var idx=+match[1];
                var urlItem=result.urlItems[idx];
                var url=urlItem.url;
                idx=url.indexOf("?#");
                if(idx<0) ix=url.indexOf("#");
                var urlRequest;
                if(idx>0){
                    urlRequest=url.substr(0,idx);
                    return "\"+escape(require("+loaderUtils.stringifyRequest(this,urlRequest)+
                    ")) + \""+
                    url.substr(idx);
                }
                urlRequest=url;
                return "\"+escape(require("+loaderUtils.stringifyRequest(this,urlRequest)+
                ")) + \"";
            }.bind(this))
        }

        var exportJs=compileExports(result,importItemMatcher.bind(this),camelCaseKeys);
        if(exportJs){
            exportJs="exports.locals="+exportJs+";";
        }

        var moduleJs;
        if(sourceMap&&result.map){
            map=result.map;
            if(map.sources){
                map.sources=map.sources.map(function(source){
                    return source.split("!").pop().replace(/\\/g,'/');
                },this);
                map.sourceRoot="";
            }
            map.file=map.file.split("!").pop().replace(/\\/g,'/');
            map=JSON.stringify(map);
            moduleJs="exports.push([module.id, "+cssAsString+", \"\", "+map+"]);";
        }else{
            moduleJs="exports.push([module.id, "+cssAsString+", \"\"]);";
        }

        callback(null,urlEscapehelper+
            "exports=module.exports=require("+
            loaderUtils.stringifyRequest(this,require.resolve("./css-base.js"))+
            ")("+sourceMap+");\n"+
            "// imports\n"+
            importJs+"\n\n"+
            "//module\n"+
            moduleJs+"\n\n"+
            "// exports\n"+
            exportJs
        );
    }.bind(this));

}