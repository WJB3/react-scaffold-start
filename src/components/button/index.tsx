import * as React from 'react';

class Button extends React.Component{
    static props={
        type:String
    }

    render(){

        const {type,children}=this.props;

        return(
            <div className={`b_button-${type}`}>{children}</div>
        )
    }
}

export default Button;