import React,{Component} from 'react';
import styles from './App.less';
import crypto from './../utils/crypto';

class App extends React.Component{

    componentDidMount(){
   
      const cryptoCode=crypto.Encrypt("word");
      console.log(cryptoCode)
    
    }   

    componentWillUnmount(){
        
    }

    render(){
        return(
            <div className={styles.container}>
                Welcome to my world!
            </div>
        )
    }
}

export default App;