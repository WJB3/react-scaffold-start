import *as React  from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Cascader, Select } from 'antd';
import *as Icon from '../components/icon';

const { Option } = Select;
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClickIcon:React.MouseEventHandler=(e)=>{
        console.log(e.target);
    }

    render() {
        return (
            <div>
                
                <Icon type="alipay" ></Icon>
                <Icon type="wechat"></Icon>
                <Icon type="qq"></Icon>
                <Icon type="home" style={{color:'red'}} ></Icon>
                <Icon type="video" style={{color:'red'}} ></Icon>
                <Icon type="ps" onClick={this.handleClickIcon}></Icon>
                 
            </div>
        )
    }
}

export default App;
