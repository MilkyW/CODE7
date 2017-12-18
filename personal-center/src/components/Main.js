require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class Interaction extends React.Component {
  render() {
    return (
      <div className="interaction">
        <span>互动消息</span>
      </div>
    );
  }
}

class Mycourse extends React.Component {
  render() {
    return (
      <div className="mycourse">
        <span>我的教程</span>
      </div>
    );
  }
}

class Mycollection extends React.Component {
  render() {
    return (
      <div className="mycollection">
        <span>我的收藏</span>
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
