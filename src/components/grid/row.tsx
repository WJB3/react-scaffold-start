import *as React from 'react';

class Row extends React.Component<RowProps,RowState>{
    static defaultProps={
        gutter:0
    };

    getGutter():number|undefined{
        const {gutter}=this.props;
        
    }

    renderRow(){
        const {}=this.props;
        const gutter=this.getGutter();
    }
}