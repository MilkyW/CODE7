//require('normalize.css/normalize.css');
// require('styles/App.css');

import React from 'react';
import InputForm from './InputFormComponent'
import SNavbar from '../components/snavbar';


class UploadComponet extends React.Component {
  constructor(props) {
    super(props);
    // props: {
    //   uid: num,
    //   tutorialList: Set,
    //   writeFilePath: String
    // }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(jsonObj) {
    console.log(jsonObj.title);
    // return false if exception occurs
    let rlinks = this.props.tutorialList;
    let rlinkError = false;
    jsonObj.rlinks.forEach(function(link) {
      if (!rlinks.has(link)) {
        rlinkError = true;
      }
    });
    if (rlinkError) {
      console.log('false');
      return false;
    }

    // send to server
    console.log('true');
    return true;
  }

  render() {
    return (
        <div>
          <SNavbar/>
          <InputForm onSubmit={this.handleSubmit}/>
        </div>
    );
  }
}

UploadComponet.defaultProps = {
};

export default UploadComponet;
