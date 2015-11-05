import React from 'react';

export default React.createClass({

  render() {
    return (
      <div className="navbar">
        <button onNavigate={this.props.goHome}>Home</button>
        <button>Logout</button>
      </div>
    );
  }
}); 
