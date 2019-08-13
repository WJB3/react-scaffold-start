import * as React from 'react';
import createReactContext from '@ant-design/create-react-context';

export const ConfigConsumerProps=[
    'getPopupContainer',
    
];

const ConfigContext=createReactContext<ConfigConsumerProps>({
    getPrefixCls:(suffixCls:string,customizePrefixCls?:string)=>{
        if(customizePrefixCls) return customizePrefixCls;
        return `wjb-${suffixCls}`;
    },
    renderEmpty:defaultRenderEmpty
})

class ConfigProvider extends React.Component<ConfigProviderProps>{
    getPrefixCls=(suffixCls:string,customizePrefixCls?:string)=>{
        const {prefixCls='wjb'}=this.props;
        if(customizePrefixCls) return customizePrefixCls;
        return suffixCls?`${prefixCls}-${suffixCls}`:prefixCls;
    }

    renderProvider=(context:ConfigConsumerProps,legacyLocale:Locale)=>{
        const {
            children,
            getPopupContainer,
            renderEmpty,
            csp,
            autoInsertSpaceInButton
        }=this.props;

        const config:ConfigConsumerProps={
            ...context,
            getPrefixCls:this.getPrefixCls,
            csp,
            autoInsertSpaceInButton
        };  

        if(getPopupContainer){
            config.getPopupContainer=getPopupContainer;
        }

        if(renderEmpty){
            config.renderEmpty=renderEmpty;
        }
    }
}