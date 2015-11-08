import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';


export default React.createClass({

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

  updateUsername(x) { 
    let newUsername = x.currentTarget.value;

    this.setState({
      username: newUsername
    });
  },

  updateUsername(x) { 
    let newUsername = x.currentTarget.value;

    this.setState({
      username: newUsername
    });
  },
  
  registerBtn() {
    return (
      <button id='registerUser' onClick={this.props.onRegisterClick}>
        Register
      </button>
    );
  },

  render() {
    return (
      <div className='registerWrap'>
        <div className="signup">
          <h2>Create a new Account</h2>
          <form>
            <label>Full Name: <input id='fullname' type="text" className="fullname"/></label>
            <label>Email: <input id='email' type="text" className="email"/></label>
            <label>Username: <input id='username' type="text" className="user"/></label>
            <label>Password: <input id='password' type="password" className="password"/></label>
            <label>Enter Your Password Again: <input type="password" className="pass2"/></label>
            {this.registerBtn()}
          </form>
        </div>
      </div>
    );
  },

});