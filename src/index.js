import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Newcontainer from './components/Newcontainer';
import Newdetails from './components/Newdetails';
import Usercenter from './components/Usercenter';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

//注册路由
ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Newcontainer}></IndexRoute>
                <Route path="/news_details/:newid" component={Newdetails}></Route>
                <Route path="/usercenter" component={Usercenter}></Route>
            </Route>
        </Router>

    ) , document.getElementById('root'));
