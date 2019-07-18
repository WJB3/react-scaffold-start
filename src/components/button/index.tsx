import * as React from 'react';
import   './index.less';

class Button extends React.Component{
    static props={
        type:String
    }

    render(){

        const {type,children}=this.props;

        return(
            <div className={"b_button"}>{children}</div>
        )
    }
}

export default Button;
