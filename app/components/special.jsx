import React from 'react';
import{Col,Row,Image,Thumbnail}from "react-bootstrap"
const specialDataList = React.createClass({
  getInitialState(){
    const data=[
      {
        id:1,
        title:"React 设计思想",
        uploader:"aaa",
        imageurl:"/image/800_536.jpg",
        description:"学习React出现的背景，React自身的优势与不足，同jQuery, AngularJS等库和框架相比差异点在哪里。React教程分为：React入门、React实践图片画廊应用(上)、React实践图片画廊应用(下)三门课程该教程是第一门教程",
        voteCount:100
      },
      {
        id:2,
        title:"React 入门教程实例-阮一峰",
        imageurl:"./image/750_464.jpg",
        description:"由于 React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。",
        uploader:"bbb",
        voteCount:105
      },

    ];

    return{
      data:data,
      searchText:'',
      formDisplay:false
    }
  },

  render(){
    let data = this.state.data;
    let state = this.state;
    let dataComps = data.map(function(q) {
      return <DisplayData
        key = {q.id}
        imgsrc = {q.imageurl}
        title = {q.title}
        uploader = {q.uploader}
        voteCount = {q.voteCount}
        description = {q.description}
      />
    });

    return(
      <div>
        <Row>
          <Col xsOffset={2} xs={3}><h2>教程精选</h2></Col></Row>
        {dataComps}
      </div>
    )
  }
});

const DisplayData = React.createClass({
  render(){
    return(
      <div>
        <Row>
          <Col xsOffset={2} xs={4}><Thumbnail src={this.props.imgsrc}/></Col>
          <Col xs={4}><h3>{this.props.title}</h3>
            {this.props.description}</Col>
        </Row>
      </div>
    )
  }
});

export default specialDataList;
