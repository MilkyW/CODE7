require('normalize.css/normalize.css');
// require('styles/App.css');

import React from 'react';
import InputForm from './InputFormComponent'

class AppComponent extends React.Component {
  render() {
    return (
        <div>
          <InputForm />
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
