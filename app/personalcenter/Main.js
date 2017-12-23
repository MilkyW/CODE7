//require('normalize.css/normalize.css');
require('./App.css');

import React from 'react';
import SNavbar from '../components/snavbar';
import {Link} from 'react-router';

var courseArray = [
  {title:"React官方文档",link:"https://reactjs.org/docs/hello-world.html"},
  {title:"React入门教程阮一峰",link:"http://www.ruanyifeng.com/blog/2015/03/react.html"},
  {title:"React官方教程",link:"https://reactjs.org/tutorial/tutorial.html"},
  {title:"Reac教程|菜鸟教程",link:"http://www.runoob.com/react/react-tutorial.html"}
];
var collectionArray = courseArray;

class Singlecourse extends React.Component {
  handleModify(e) {

  }
  render() {
    return (
      <div className="single">
        <a href={this.props.link}> {this.props.title} </a>
        <Link to="/release"><button onClick={this.handleModify.bind(this)} className="modifybutton"> 修改 </button></Link>
      </div>
    );
  }
}

class Singlecollection extends React.Component {
  render() {
    return (
      <div className="single">
        <a href={this.props.link}> {this.props.title} </a>
      </div>
    );
  }
}

class Interaction extends React.Component {
  render() {
    return (
      <div className="interaction">
        <h3>互动消息</h3>
        <div className="message">
        <p> <b>   Roger </b>给你的<b> React官方教程 </b>点赞</p>
        <p> <b>   Roger </b>评论了你的<b> React入门教程阮一峰 </b></p>
        <p> <b>   Milos </b>给你的<b> React官方文档 </b>点赞</p>
        </div>
      </div>
    );
  }
}

class Mycourse extends React.Component {
  render() {
    var courselist = [];

    courseArray.forEach(function(value,index){
      courselist.push(<Singlecourse link={value.link} title={value.title} key={index} />);
    }.bind(this));

    return (
      <div className="interaction">
        <h3>我的教程</h3>
        <div>{courselist}</div>
      </div>
    );
  }
}

class Mycollection extends React.Component {
  render() {
    var collectionlist = [];

    courseArray.forEach(function(value,index){
      collectionlist.push(<Singlecollection link={value.link} title={value.title} key={index} />);
    }.bind(this));

    return (
      <div className="interaction">
        <h3>我的收藏</h3>
        <div>{collectionlist}</div>
      </div>
    );
  }
}

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <SNavbar/>
        <Interaction />
        <Mycourse />
        <Mycollection />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
