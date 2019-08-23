import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Cascader, Select } from 'antd';
import compose from '../utils/compose';
import Demo1 from './hooks/demo1';
import Demo2 from './hooks/demo2';
import Demo3 from './hooks/demo3';
import { options,proviceDemo } from './../data/cascaderdemo';
import { replaceFields,transformTreeStruct } from './../utils/tree';

const { Option } = Select;
class App extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        let transform1 = replaceFields(options);
        let transform2=transformTreeStruct(proviceDemo);
        console.log(transform2)

    }

    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    render() {

        const children = [];

        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }

        let transform = replaceFields(options);

        return (
            <div>

                <Cascader
                    options={transform}
                    placeholder="Please select"
                />

                <Select  allowClear style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>


            </div>
        )
    }
}

export default App;
