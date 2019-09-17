let enquire:any;

if(typeof window!=='undefined'){
    const matchMediaPolyfill=(mediaQuery:string)=>{
        return {
            media:mediaQuery,
            matches:false,
            addListener(){},
            removeListener(){}
        };
    };
    if(!window.matchMedia){
        window.matchMedia=matchMediaPolyfill as any;
    }

    enquire=require('./mediaQuery')
     
}

export type Breakpoint='xxl'|'xl'|'lg'|'md'|'sm'|'xs';