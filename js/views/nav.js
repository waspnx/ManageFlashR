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

  goHome() {
    this.props.onHomeClick();
  },

  logout() {
    this.props.onLogoutClick();
  },

  render() {
    // console.log('GOD DAMMIT')
    return (
      <div className="navbar">
        <button className='homenav' onClick={this.goHome}>Home</button>
        <button className='logoutnav' onClick={this.logout}>Logout</button>
      </div>
    );
  }
}); 
