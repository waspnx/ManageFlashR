// this view shows rows of flashR cards
// that comprise the deck that was clicked in UserView

import React from 'react';
import Backbone from 'backbone';


export default React.createClass({

processCards(data) {

  let onCardSelect= this.props.onCardSelect;

  return (
    <div className='cardContainer' key={data._id} 
      onClick ={()=> onCardSelect(data._Id)}>
      <span>Question: {data.question}</span>
      <span>Answer: {data.answer}</span>
    </div>
   )
},

 addCardHandler(route){
  this.props.onAddCardClick(route);
},

backBtnHandler(route){
  this.props.onBackBtnClick(route);
},

  render() {
     <div className='deckViewContainer'>

        {this.props.cards().map(this.processCards)}

      <div className="btns">
        <i className="fa fa-plus" onClick={() => this.addCardHandler()}></i>
        <button className="backBtn" onClick={() => this.backBtnHandler()}>back</button>
      </div>    

    </div>
  }

}); 