import React from 'react';
import SNavbar from './snavbar';
import{Form,FormControl,FormGroup,Col,Checkbox,ControlLabel,Button}from "react-bootstrap"

const login =  React.createClass({
  getInitialState(){
    return{
      id:"",
      password:"",
      idError:null,
      passwordError:null,
      isRemember:false,
    };
  },

  idCheck(){
    const id = this.state.id;
    if(id==="admin") {
      return 'success';
    }
    else{
      return 'error';
    }
  },

  passwordCheck(){
    const password = this.state.password;
    if(password==="admin") {
      return 'success';
    }
    else{
      return 'error';
    }
  },

  handleChangeId(e){
    this.setState({id:e.target.value});
  },

  handleChangePassword(e){
    this.setState({password:e.target.value});
  },

  handleSubmit(e){
      e.preventDefault();
      this.setState({value:e.target.value});
  },

  render(){
    return    <div>
      <SNavbar/>
      <Form horizontal className ="login">
        <FormGroup
          controlId="formHorizontalId"
          validationState={this.idCheck()}
        >
          <Col componentClass={ControlLabel} smOffset={2} sm={2}>
           账号
          </Col>
          <Col sm={3}>
            <FormControl
              type="text"
              value = {this.state.id}
              placeholder="请输入用户名"
              onChange={this.handleChangeId}
            />
            <FormControl.Feedback/>
          </Col>
        </FormGroup>

        <FormGroup
          controlId="formHorizontalPassword"
          validationState={this.passwordCheck()}
          >
          <Col componentClass={ControlLabel} smOffset={2} sm={2}>
            密码
          </Col>
          <Col sm={3}>
            <FormControl
              type="text"
              value = {this.state.password}
              placeholder="请输入密码"
              onChange={this.handleChangePassword}
            />
            <FormControl.Feedback/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={4} sm={10}>
            <Checkbox>记住我</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={4} sm={10}>
            <Button type="submit">
              登录
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  }
});

export default login;
