import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Cascader, Select } from 'antd';
import Icon from './../components/icon';

const { Option } = Select;
class App extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Icon name="wechat"></Icon>
            </div>
        )
    }
}

export default App;
