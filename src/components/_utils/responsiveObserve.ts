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
export type BreakpointMap=Partial<Record<Breakpoint,string>>;

export const responsiveArray:Breakpoint[]=['xxl','xl','lg','md','sm','xs'];

export const responsiveMap:BreakpointMap={
    xs:'(max-width:575px)',
    sm:'(min-width:576px)',
    md:'(min-width:767px)',
    lg:'(min-width:992px)',
    xl:'(min-width:1200px)',
    xxl:'(min-width:1600px)'
}

type SubscribeFunc=(screens:BreakpointMap)=>void;

let subscribers:Array<{
    token:string,
    func:SubscribeFunc
}>=[];

let subUid=-1;
let screens={};

const responsiveObserve={
    dispatch(pointMap:BreakpointMap){
        screens=pointMap;
        if(subscribers.length<1){
            return false;
        }
        subscribers.forEach(item=>{
            item.func(screens);
        });
        return true;
    },
    subscribe(func:SubscribeFunc){
        if(subscribers.length===0){
            this.register();
        }
        const token=(++subUid).toString();
        subscribers.push({
            token,
            func,
        });
        func(screens);
        return token;
    },
    unsubscribe(token:string){
        subscribers=subscribers.filter(item=>item.token!==token);
        if(subscribers.length===0){
            this.unregister();
        }
    },
    unregister(){
        Object.keys(responsiveMap).map((screen:Breakpoint)=>{
            enquire.unregister(responsiveMap[screen])
        })
    },
    register(){
        Object.keys(responsiveMap).map((screen:Breakpoint)=>{
            enquire.register(responsiveMap[screen],{
                match:()=>{
                    const pointMap={
                        ...screens,
                        [screen]:true
                    };
                    this.dispatch(pointMap);
                },
                unmatch:()=>{
                    const pointMap={
                        ...screens,
                        [screen]:false
                    };
                    this.dispatch(pointMap);
                },
                destroy(),
            })
        })
    }
};
export default responsiveObserve;