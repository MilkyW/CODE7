require('normalize.css/normalize.css');
// require('styles/App.css');

import React from 'react';
import InputForm from './InputFormComponent'

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(jsonObj) {
    // send to server
    // return false if exception occurs
  }

  render() {
    return (
        <div>
          <InputForm onSubmit={this.handleSubmit}/>
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
