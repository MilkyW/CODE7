import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Usercenter from './personalcenter/Main';
import Release from './upload/Main';
import Login from './components/login';
import Test from "./components/test";
import Special from "./components/special";
import Showpage from "./show-page/src/index";
import {Router, Route, hashHistory}from'react-router';

ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/user" component={Usercenter}/>
      <Route path="/release" component={Release}/>
      <Route path="/login" component={Login}/>
      <Route path="/test" component={Test}/>
      <Route path="/special" component={Special}/>
      <Route path="/showpage" component={Showpage}/>
    </Router></div>,
  document.getElementById('app')
);
