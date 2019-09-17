import { isObject,isFunction,isArray } from '@/utils/helper'; 

/** 响应mediaQuery媒体查询 **/
function QueryHandler(options){
    this.options=options;
    !options.deferSetup&&this.setup();
}

QueryHandler.prototype={
    constructor:QueryHandler,
    setup:function(){
        if(this.options.setup){
            this.options.setup();
        }
        this.initialised=true;
    },
    on:function(){
        !this.initialised && this.setup();
        this.options.match&&this.options.match();
    },
    off:function(){
        this.options.unmatch&&this.options.unmatch();
    },
    destory:function(){
        this.options.destory?this.options.destory():this.off();
    },
    equals:function(target){
        return this.options===target || this.options.match===target;
    }
}

function mediaEach(collection,fn){
    let i=0,length=collection.length,count;
    for(i;i<length;i++){
        count=fn(collection[i],i);
        if(count===false){
            break;
        }
    }
}

function MediaQuery(query,isUnconditional){
    this.query=query;
    this.isUnconditional=isUnconditional;
    this.handlers=[];
    this.mql=window.matchMedia(query);
    let self=this;
    this.listener=function(mql){
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql=mql.currentTarget||mql;
        self.assess();
    };
    this.mql.addListener(this.listener);

}

MediaQuery.prototype={
    constructor:MediaQuery,
    addHandler:function(handler){
        var qh=new QueryHandler(handler);
        this.handlers.push(qh);
        this.matches() && qh.on();
    },
    removeHandler:function(handler){
        var handlers=this.handlers;
        mediaEach(handlers,function(h,i){
            if(h.equals(handler)){
                h.destroy();
                return !handlers.splice(i,1);
            }
        })
    },
    matches:function(){
        return this.mql.matches||this.isUnconditional;
    },
    clear:function(){
        mediaEach(this.handlers,function(handler){
            handler.destory();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length=0;
    },
    assess:function(){
        var action=this.matches()?'on':'off';
        mediaEach(this.handlers,function(handler){
            handler[action]();
        });
    }
}

function MediaQueryDispatch(){
    if(!window.matchMedia){
        throw new Error('matchMedia not present,legacy browers require a polyfill');
    }
    this.queries={};
    this.browserIsIncapable=!window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype={
    constructor:MediaQueryDispatch,
    register:function(q,options,shouldDegrade){
        var queries=this.queries,
        isUnconditional=shouldDegrade && this.browserIscapable;

        if(!queries[q]){
            queries[q]=new MediaQuery(q,isUnconditional);
        }

        if(isFunction(options)){
            options={match:options};
        }

        if(!isArray(options)){
            options=[options];
        }

        mediaEach(options,function(handler){
            if(isFunction(handler)){
                handler={match:handler};
            }
            queries[q].addHandler(handler);
        })

        return this;

    },
    unregister:function(q,handler){
        var query=this.queries[q];
        if(query){
            if(handler){
                query.removeHandler(handler);
            }
            else{
                query.clear();
                delete this.queries[q];
            }
 
        }
        return this;
    }
}

module.exports=new MediaQueryDispatch();