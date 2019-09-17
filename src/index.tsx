import *as ReactDOM from 'react-dom';
import *as React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import App from './routes/App';
import Excel from './routes/juejin/Excel';


ReactDOM.render((<Router>
   {/* <Route path="/" extra component={App}></Route> */}
   <Route path="/" extra component={Excel} />
</Router>),document.getElementById('root'));