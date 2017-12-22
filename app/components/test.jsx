import React from 'react';
import {Link} from 'react-router';
import{FormControl,FormGroup,Col,Checkbox,ControlLabel,HelpBlock}from "react-bootstrap"
const FormExample = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel> 带校验的可执行实例 </ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="请输入文字"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>基于字符串长度的校验。</HelpBlock>
        </FormGroup>
      </form>
    );
  }
});

export default FormExample;
