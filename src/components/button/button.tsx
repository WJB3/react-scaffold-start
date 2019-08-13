import * as React from 'react';
import classNames from 'classnames';
import "./button.css";

class Button extends React.Component<ButtonProps,ButtonState>{
    render(){
        const {children,type}=this.props;

        const classnames=classNames(`wjb-${type}`);

        return (
            <button className={classnames}><span>{children}</span></button>
        )
    }
}

export default Button;