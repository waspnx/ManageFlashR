import React from 'react';

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

  render() {
    console.log('GOD DAMMIT')
    return (
      <div className="navbar">
        <button onNavigate={this.props.goHome}>Home</button>
        <button>Logout</button>
      </div>
    );
  }
}); 
