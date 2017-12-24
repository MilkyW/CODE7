import React from 'react';
import {Link} from 'react-router'
import{Navbar,Col,Row,NavItem,Image,Nav,Thumbnail,Grid,Form,Button}from "react-bootstrap"

const SNavbar = React.createClass({
  render(){
    return(
      <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Demo page</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav class="pull-right">
          <NavItem><Link to = "/login">登录</Link></NavItem>
          <NavItem><Link to="/user"> 个人中心</Link></NavItem>
          <NavItem><Link to="/release"> 发布教程</Link></NavItem>
          <NavItem><Link to="/showpage"> 示例</Link></NavItem>
        </Nav>
      </Navbar>
      </div>
    )
  }
});

export default SNavbar;
