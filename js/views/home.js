import React from 'react';
import ReactDom from 'react-dom';
import _ from 'underscore';
import UserNew from './user-register'

export default React.createClass({

  getStatus() {
      let user = this.props.user;
      if (user) {
        let name = user.username;
        let msg = `Welcome ${name}`;
        return (
          <span>{msg}</span>
        );
      } else {
        return (
          <span>You are not logged in</span>
        );
      }
  },

  addUserHandler(user,pass){
    this.props.onRegisterClick(user,pass);
  },

  addLoginHandler(user,pass){
    this.props.onLoginClick();
  },

    login() {
    let request = $.ajax({
      url: 'http://localhost:3000/login',
      method: 'POST',
      data: {
        user: {
          username: '',
          password: ''
        }
      }
    });
    $('.app').html('loading...');
    request.then((data) => {
      console.log('data:', data);
      Cookies.set('user', data);
      $.ajaxSetup({
        headers: {
          auth_token: data.access_token
        }
      });
      this.redirect('deck');
    }).fail(() => {
      this.goto('');
      alert('Sorry, your login was rejected.  Please try again, or Register as a New User.')
    });
  },

  render(){
    return(
      <div className='home wrapper'>
        <div className='login'>
          <form className='loginForm'>
            <input type='text' placeholder='Username' className='username field'></input>
            <input type='password' placeholder='password' className='password field'></input>
            <input onSubmit=login() type='submit'>Login</input>
            <input type='button'>Register!</input>
          </form>
        </div>
      </div>
    );
  }
});