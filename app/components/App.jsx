import React from 'react';
import {Link} from 'react-router';
require('./App.css');
import SNavbar from './snavbar';
import{Navbar,Col,Row,NavItem,Thumbnail,Image,Nav,Grid,Form,Button}from "react-bootstrap"

const SearchBox = React.createClass({
  handleChange(e){
    let newInput = this.refs.myTextInput.value;
    this.props.searchTextUpdate(newInput);
  },

  render(){
    return(
      <div className = "searchBox">
        <Row>
          <Col xsOffset={7} xs={5}>
        <input type="text" ref="myTextInput" size="35" placeholder="请输入关键词来搜索"/>
          </Col>
        </Row>
          <Row>
          <Col xsOffset={10} xs={1}>
        <Button onClick={this.handleChange} bsSize="large" bsStyle="primary">搜索</Button>
          </Col>
        </Row>
      </div>
    )
  }
});

const DisplayData = React.createClass({
  render(){
    return(
      <div className="block">
          <Col xs={3}>
          <Thumbnail className="image"  src={this.props.imgsrc}>
            <h4>{this.props.title}</h4>
            <p>上传:{this.props.uploader}</p>
            <p>赞:{this.props.voteCount}</p>
            <p className="description">{this.props.description}</p>
          </Thumbnail>
          </Col>
      </div>
)
}
});

const DataList = React.createClass({
  getInitialState(){
    const data=[
      {
        id:1,
        title:"React 设计思想",
        uploader:"aaa",
        voteCount:100,
        imgsrc:"/image/673_464.jpg",
        description:"本文是 React 核心开发者、有 React API 终结者之称的 Sebastian Markbåge 撰写                "
      },
      {
        id:2,
        title:"React 入门教程实例-阮一峰",
        uploader:"bbb",
        voteCount:105,
        imgsrc:"/image/800_550.jpg",
        description:"由于 React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单                 "
      },
      {
        id:3,
        title:"React构建实时聊天应用",
        uploader:"ccc",
        voteCount:110,
        imgsrc:"/image/1023_705.jpg",
        description:"Redux+React+Express+Socket.io构建实时聊天应用                                            "
      },
      {
        id:4,
        title:"React入门",
        uploader:"ddd",
        voteCount:120,
        imgsrc:"/image/480_329.jpg",
        description:"学习React出现的背景，React自身的优势与不足，同jQuery, AngularJS等库和框架相比差异点在哪里。"
      },
      {
        id:5,
        title:"React入门",
        uploader:"ddd",
        voteCount:120,
        imgsrc:"/image/480_329.jpg",
        description:"学习React出现的背景，React自身的优势与不足，同jQuery, AngularJS等库和框架相比差异点在哪里。"

      },
      {
        id:6,
        title:"React 设计思想",
        uploader:"aaa",
        voteCount:100,
        imgsrc:"/image/673_464.jpg",
        description:"本文是 React 核心开发者、有 React API 终结者之称的 Sebastian Markbåge 撰写                "
      },
      {
        id:7,
        title:"React入门",
        uploader:"ddd",
        voteCount:120,
        imgsrc:"/image/1023_705.jpg",
        description:"学习React出现的背景，React自身的优势与不足，同jQuery, AngularJS等库和框架相比差异点在哪里。"
      },      {
        id:8,
        title:"React构建实时聊天应用",
        uploader:"ccc",
        voteCount:110,
        imgsrc:"/image/1023_705.jpg",
        description:"Redux+React+Express+Socket.io构建实时聊天应用                                            "
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
          imgsrc = {q.imgsrc}
          description={q.description}
        />
      });

    return(
      <div className = "center">
        <Row>
          <div className="title"><Col xsOffset={5} xs={3}><h1>Tutorial</h1></Col></div></Row>
        <Row><Col xsOffset={3} xs={3}><SearchBox searchTextUpdate={this.handleSearchText}/></Col></Row>
        {dataComps}
      </div>
    )
  }

});


const main =  React.createClass({
  render(){
    return(
      <div>
        <SNavbar/>
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
