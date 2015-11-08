import React from 'react';
import ReactDom from 'react-dom';
import _ from 'underscore';
import UserView from './register'
import $ from 'jquery';

export default React.createClass({

  // getStatus() {
  //     let user = this.props.user;
  //     if (user) {
  //       let name = user.username;
  //       let msg = `Welcome user.username}`;
  //       return (
  //         <span>{msg}</span>
  //       );
  //     } else {
  //       return (
  //         <span>You are not logged in</span>
  //       );
  //     }
  // },

  selectRegHandler(){
    this.props.onRegisterClick();
  },

  onLoginHandler(x) {
    x.preventDefault();
    this.props.onLoginClick(this.state.username, this.state.password);
  },

  updatePassword(x) { 
    let newPassword = x.currentTarget.value;

    this.setState({
      password: newPassword
    });
  },

  updateUsername(x) { 
    let newUsername = x.currentTarget.value;

    this.setState({
      username: newUsername
    });
  },

  render(){
    return(
      <div className='home wrapper'>
        <div className='login'>
          <form className='loginForm'>
            <input onChange={this.updateUsername} id='username' type='text' placeholder='Username' className='username field'></input>
            <input onChange={this.updatePassword} id='password' type='password' placeholder='Password' className='password field'></input>
            <input className='logBtn button' onClick={this.onLoginHandler} type='submit' value="Login"></input>
            <input className='regBtn button' onClick={this.selectRegHandler} type='button' value="Register!"></input>
          </form>
        </div>
      </div>
    );
  }
  
});