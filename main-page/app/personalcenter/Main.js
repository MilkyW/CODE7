//require('normalize.css/normalize.css');
require('./App.css');

import React from 'react';

var courseArray = [];
var collectionArray = [];

class Singlecourse extends React.Component {
  handleModify(e) {

  }
  render() {
    return (
      <div>
        <a href={this.props.link}> {this.props.title} </a>
        <button onClick={this.handleModify.bind(this)}> 修改 </button>
      </div>
    );
  }
}

class Singlecollection extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.link}> {this.props.title} </a>
      </div>
    );
  }
}

class Interaction extends React.Component {
  render() {
    return (
      <div className="interaction">
        <h2>互动消息</h2>
      </div>
    );
  }
}

class Mycourse extends React.Component {
  render() {
    var courselist = [];

    courseArray.forEach(function(value){
      courselist.push(<Singlecourse link={value["link"]} title={value["title"]} />);
    }.bind(this));

    return (
      <div className="interaction">
        <h2>我的教程</h2>
        <div>{courselist}</div>
      </div>
    );
  }
}

class Mycollection extends React.Component {
  render() {
    var collectionlist = [];

    courseArray.forEach(function(value){
      collectionlist.push(<Singlecollection link={value["link"]} title={value["title"]} />);
    }.bind(this));

    return (
      <div className="interaction">
        <h2>我的收藏</h2>
        <div>{collectionlist}</div>
      </div>
    );
  }
}

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
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
