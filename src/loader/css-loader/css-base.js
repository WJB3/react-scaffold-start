module.exports=function(useSourceMap){
    var list=[];

    list.toString=function toString(){
        return this.map(function(item){
            var content=cssWithMappingToString(item,useSourceMap);
            if(item[2]){
                return "@media "+item[2]+"{"+content+"}";
            }else{
                return content;
            }
        })
    }

    list.i=function(modules,mediaQuery){
        if(typeof modules==="string")
            modules=[[null,modules,""]];
        var alreadyImportedModules={};
        for(var i=0;i<this.length;i++){
            var id=this[i][0];
            if(typeof id==="number")
                alreadyImportedModules[id]=true;
        }
        for(i=0;i<modules.length;i++){
            var item=modules[i];
            if(typeof item[0]!=="number"||!alreadyImportedModules[item[0]]){
                if(mediaQuery&&!item[2]){
                    item[2]=mediaQuery;
                }else if(mediaQuery){
                    item[2]="("+item[2]+") and ("+medaiQuery+")";
                } 
                list.push(item);
            }
        }
    };
    return list;
};

function cssWithMappingToString(item,useSourceMap){
    var content=item[1] || '';
    var cssMapping=item[3];
    if(!cssMapping){
        return content;
    }

    if(useSourceMap && typeof btoa==="function"){
        var sourceMapping=toComment(cssMapping);
        var sourceURLs=cssMapping.sources.map(function(source){
            return '/*# sourceURL='+cssMapping.sourceRoot+source+' */'
        });

        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
}

function toComment(sourceMap){
    var base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data='sourceMappingURL=data:application/json;charset=utf-8;base64,'+base64;

    return '/*# '+data+' */';
}