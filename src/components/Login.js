import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import {LoginAction} from '../Actions/index';
import {connect} from 'react-redux';


import authMaster from './AuthMaster';
import {setCookie, getCookie, checkCookie} from '../Utilities/CookieManager'


class LoginPage extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {username: '', password: '', showError: false};
    
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
   }

   handleOnSubmit = (event) => {
    event.preventDefault();
    
    authMaster.Login(this.state, () => {this.props.history.push("/categories")}, () => {this.setState({showError: true})});   
  }

  
  render(){
    setCookie('_cs_username', 'bobo');
    var k = getCookie('_cs_username');
    
    return (
      <Form className={this.state.showError? 'error': 'test-class' } onSubmit={this.handleOnSubmit}>
      <Form.Field>
        <label>Login Email</label>
        <input onChange={this.onChange} value={this.state.userName} name="username" placeholder='Email' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input onChange={this.onChange} value={this.state.password} name="password" placeholder='Password' />
      </Form.Field>    
      <Button type='submit'>Submit</Button>
      <Message
      error
      header='A Login Error Has Occurred'
      content='Please verify that your email and password are correct and try again.'
    />
    </Form>
    )

  }  
}

const mapStateToProps = (state) => {
   return {
       status: state.loggedIn.status,
       token: state.loggedIn.data

   };
 };

export default connect(mapStateToProps, {LoginAction} )(LoginPage);
