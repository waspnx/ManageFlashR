import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';


export default React.createClass({

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
            <label>Full Name: <input type="text" className="fullname"/></label>
            <label>Email: <input type="text" className="email"/></label>
            <label>Username: <input type="text" className="user"/></label>
            <label>Password: <input type="password" className="password"/></label>
            <label>Enter Your Password Again: <input type="password" className="pass2"/></label>
            {this.registerBtn()}
          </form>
        </div>
      </div>
    );
  },

});