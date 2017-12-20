import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Usercenter from './personalcenter/Main';
import Release from './submit/Main';
import Login from './components/login';
import Test from "./components/test";
import Special from "./components/special";
import {Router, Route,hashHistory}from'react-router';

  ReactDOM.render(
 <Router history = {hashHistory}>
   <Route path="/" component={App}/>
   <Route path ="/user" component = {Usercenter}/>
   <Route path = "/release" component = {Release}/>
   <Route path = "/login" component = {Login}/>
   <Route path = "/test" component = {Test}/>
   <Route path = "/special" component = {Special}/>
 </Router>,
  document.getElementById('app')
);
