import *as React  from 'react';
import *as styles from './App.less';

import { Cascader, Select ,Button,Table} from 'antd';
import Icon from '../components/icon';
// import Button from '../components/button';
import { isObject } from '@/utils/helper';

const { Option } = Select;
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClickButton(e){
        alert("你点击了我")
    }

    componentDidMount(){
    }
    
    render() {
        return (
            <div style={{padding:'20px',backgroundColor:'#D5D5D5'}}>
                
               
                {/* <div>图标组件：</div>
                <Icon type="ps"></Icon>
                <Icon type="loading"></Icon>
                <div>按钮组件type：</div>
                <Button type="primary">Primary</Button>
                <Button >Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="warning">Warning</Button>
                <Button type="link">Link</Button>
                <div>按钮组件shape：</div>
                <Button shape="circle" type="primary">circle</Button>
                <Button shape="round" type="warning">round</Button>
                <div>按钮组件size：</div>
                <Button type="primary" size={"small"}>small</Button>
                <Button type="primary">default</Button>
                <Button size={"large"} type="warning">large</Button>
                <div>按钮组件loading：</div>
                <Button size={"large"} type="danger" loading >loading</Button>
                <Button size={"default"} type="warning" loading >warning</Button>
                <Button size={"small"} type="primary" loading >primary</Button>
                <div>按钮组件disabled：</div>
                <Button size={"default"} type="primary" disabled>primary</Button>
                <div>按钮组件ghost：</div>
                <Button size={"default"} type="primary" ghost>ghost</Button>
                <Button size={"default"} type="danger" ghost>ghost</Button>
                <Button size={"default"} ghost>ghost</Button>
                <div>按钮组件href：</div>
                <Button size={"default"} href={"http://www.baidu.com"} target="_blank">点击跳转到百度</Button>
                <div>按钮组件onclick：</div>
                <Button type={"primary"} onClick={this.handleClickButton}>点击出弹框</Button>
                <div>按钮组件block：</div>
                <Button type={"primary"} block>占满整行</Button> */}
            </div>
        )
    }
}

export default App;
