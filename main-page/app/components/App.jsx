import React from 'react';
import {Link} from 'react-router'
require('./App.css');
import{Navbar,Col,Row,NavItem,Image,Nav,Grid,Form,Button}from "react-bootstrap"

const SearchBox = React.createClass({
  handleChange(e){
    let newInput = this.refs.myTextInput.value;
    this.props.searchTextUpdate(newInput);
  },

  render(){
    return(
      <div className = "searchBox">
        <Row>
          <Col  xs={3}>
        <input type="text" ref="myTextInput"  placeholder="请输入关键词来搜索"/>
          </Col>
          <Col xsOffset={5} xs={1}>
        <Button  onClick={this.handleChange} bsStyle="primary">搜索</Button>
          </Col>
        </Row>
      </div>
    )
  }
});

const DisplayData = React.createClass({
  render(){
    return(
      <div>
        <Row>
          <Col xsOffset={1} xs={3}>{this.props.title}</Col>
          <Col xs={1}>{this.props.uploader}</Col>
          <Col xs={1}>{this.props.voteCount}</Col>
        </Row>
      </div>
)
}
});

const DataList = React.createClass({
  getInitialState(){
    var data=[
      {
        id:1,
        title:"React 设计思想",
        uploader:"aaa",
        voteCount:100
      },
      {
        id:2,
        title:"React 入门教程实例-阮一峰",
        uploader:"bbb",
        voteCount:105
      },
      {
        id:3,
        title:"React构建实时聊天应用",
        uploader:"ccc",
        voteCount:110
      },
      {
        id:4,
        title:"React入门",
        uploader:"ddd",
        voteCount:120
      },
      {
        id:5,
        title:"React入门",
        uploader:"ddd",
        voteCount:120
      },      {
        id:6,
        title:"React入门",
        uploader:"ddd",
        voteCount:120
      },      {
        id:7,
        title:"React入门",
        uploader:"ddd",
        voteCount:120
      },      {
        id:8,
        title:"React入门",
        uploader:"ddd",
        voteCount:120
      },
    ];

    return{
      data:data,
      searchText:'',
      formDisplay:false
    }
  },

  handleSearchText(searchText){
    this.state.searchText = searchText;
    this.setState(this.state);
  },

  onToggleForm(){
    this.setState({
      formDisplay:!this.state.formDisplay
    })
  },
  sortData(data){
    data.sort(function(a,b){
      return b.voteCount - a.voteCount
    });
    return data
  },

  render(){
    let data = this.sortData(this.state.data);
    let state = this.state;
    let dataComps = data.filter(function(f){
      return f.title.toLowerCase().indexOf(state.searchText.toLowerCase())>-1
    }).map(function(q) {
        return <DisplayData
          key = {q.id}
          datakey = {q.id}
          title = {q.title}
          uploader = {q.uploader}
          voteCount = {q.voteCount}
        />
      });

    return(
      <div>
        <Row>
          <Col xsOffset={1} xs={3}><h3>教程列表</h3></Col></Row>
        <Row><Col xsOffset={1} xs={3}><SearchBox searchTextUpdate={this.handleSearchText}/></Col></Row>
        <Row><Col xsOffset={1} xs={3}>文章标题</Col>
          <Col xs={1}>上传者</Col>
          <Col xs={1}>赞数</Col></Row>
        {dataComps}
      </div>
    )
  }

});


const main =  React.createClass({
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
            <NavItem><Link to="/special"> 精选</Link></NavItem>
            <NavItem><Link to = "/test"> Test</Link></NavItem>
          </Nav>
        </Navbar>



        <div className="data">
        <DataList/>
        </div>
      </div>
    )
  }
});

export default main

/*
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
*/
