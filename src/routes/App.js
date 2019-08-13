import React,{Component} from 'react';
import './App.css';
import Button from '../components/button/button.tsx';
import compose from '../utils/compose';


class App extends React.Component{

    componentDidMount(){

        
    }

    render(){
        return(
            <div>
             
                <Button type="primary">Primary</Button>
             
            </div>
        )
    }
}

export default App;
