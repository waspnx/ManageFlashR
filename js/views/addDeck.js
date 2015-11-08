//this view allows you to add a deck
import React from 'react';
import Backbone from 'backbone';


export default React.createClass({

submitHandler(){
  this.props.onSubmitClick();
},

backBtnHandler(){
  this.props.onBackBtnClick();
},

  render() {
    return(
      
    <div className='addDeckContainer'>

    <button className='backBtn' onClick={() => this.backBtnHandler()}>back</button>
     
      <h1> Enter your deck title: </h1>
      <form>
        <input type='text' placeholder='Title' className='enterTitle'></input>
        <button onClick={() => this.submitHandler()}>Submit</button>
      </form>

    </div>
    );
  }
}); 