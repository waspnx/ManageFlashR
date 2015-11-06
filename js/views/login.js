import React from 'react';
import ReactDom from 'react-dom';
import _ from 'underscore';
import UserView from './register'
import $ from 'jquery';

export default React.createClass({

  getStatus() {
      let user = this.props.user;
      if (user) {
        let name = user.username;
        let msg = `Welcome user.username}`;
        return (
          <span>{msg}</span>
        );
      } else {
        return (
          <span>You are not logged in</span>
        );
      }
  },

  selectRegHandler(){
    this.props.onRegisterClick();
  },

  addLoginHandler(){
    this.props.onLoginClick();
  },

  render(){
    return(
      <div className='home wrapper'>
        <div className='login'>
          <form className='loginForm'>
            <input type='text' placeholder='Username' className='username field'></input>
            <input type='password' placeholder='password' className='password field'></input>

            <input onSubmit={this.login(user)} type='submit'>Login</input>
            <input onClick={()=>this.selectRegHandler()} type='button'>Register!</input>
          </form>
        </div>
      </div>
    );
  }
  
});