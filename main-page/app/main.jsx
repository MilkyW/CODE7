import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Usercenter from './components/usercenter';
import Release from './components/release';
import Login from './components/login';
import Test from "./components/test";
import {Router, Route,hashHistory}from'react-router';

  ReactDOM.render(
 <Router history = {hashHistory}>
   <Route path="/" component={App}/>
   <Route path ="/user" component = {Usercenter}/>
   <Route path = "/release" component = {Release}/>
   <Route path = "/login" component = {Login}/>
   <Route path = "/test" component = {Test}/>
 </Router>,
  document.getElementById('app')
);
