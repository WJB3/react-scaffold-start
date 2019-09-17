import *as React from 'react';
import *as PropTypes from 'prop-types';
import classnames from '../helpers/classnames';
import Icon from './../icon';
import './index.less';

export interface BaseButtonProps {
    type?: string,
    className?: string,
    ghost?: Boolean,
    style?: Object,
    shape?: string,
    size?: string,
    loading?: boolean,
    disabled?: Boolean,
    href?: string,
    icon?:string,
    target?:string,
    onClick?:Function,
    block?:Boolean
}

interface ButtonState{
    loading?:boolean
}


class Button extends React.Component<BaseButtonProps,ButtonState>{

    static defaultProps={
        loading:false,
    };

    static propTypes={
        type:PropTypes.string,
        className:PropTypes.string,
        ghost:PropTypes.bool,
        style:PropTypes.object,
        shape:PropTypes.string,
        size:PropTypes.string,
        loading:PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        disabled:PropTypes.bool,
        href:PropTypes.string,
        icon:PropTypes.string,
        target:PropTypes.string,
        onClick:PropTypes.func,
        block:PropTypes.bool
    }

    static getDerivedStateFromProps(nextProps:BaseButtonProps,prevState:ButtonState){
    
        if(nextProps.loading instanceof Boolean){
            return {
                ...prevState,
                loading:nextProps.loading,
            };
        }
        return null;
    }

    constructor(props:BaseButtonProps){
        super(props);
        this.state={
            loading:props.loading
        };
    }

    handleClick:React.MouseEventHandler<HTMLButtonElement| HTMLAnchorElement>=e=>{
        const { loading }=this.state;
        const { onClick }=this.props;
        if(loading){
            return ;
        }
        if(onClick){
            (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
        }
    }

    render(){
        const { className, children, type, ghost, style, shape, loading, size, disabled, icon,href,target, onClick,block,...restProps } = this.props;

        const iconType=loading?'loading':icon;

        const iconNode=iconType?<Icon type={iconType} />:null;

        const classes = classnames('baby-button', type ? { [`baby-button--${type}`]: type } : 'baby-button--default', className, size ? { [`baby-button-size--${size}`]: size } : `baby-button-size--default`, {
            [`baby-button--${shape}`]: shape,
            [`baby-button--loading`]: loading,
            [`baby-button--disabled`]: disabled,
            [`baby-button--ghost`]: ghost,
            [`baby-button--ahref`]: href,
            [`baby-button--block`]: block
        });
    
        if (href) {
            return (
                <a
                    {...restProps}
                    className={classes}
                    href={href}
                    target={target}
                    
                >
                    {iconNode}{children}
                </a>
            )
        }
        return (
            <button style={style} className={classes} {...restProps} onClick={this.handleClick}>{iconNode}{children}　</button>
        )
    }
}
 

export default Button;