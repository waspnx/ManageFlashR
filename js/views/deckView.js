import React from 'react';
import Backbone from 'backbone';
import _ from 'underscore';

// this view shows rows of flashR cards
// that comprise the deck that was clicked in UserView

export default React.createClass({

  addCardHandler(){
    this.props.onAddCardClick();
  },

  backBtnHandler(route){
    this.props.onBackBtnClick(route);
  },

  processCards(card) {
    let onCardSelect= this.props.onCardSelect;
    return (
      <div className='cardContainer' key={card.id} 
        onClick ={()=> onCardSelect(card.id)}>
        <span>Question: {card.question}</span>
        <span>Answer: {card.answer}</span>
      </div>
     )
  },


  render() {
    return(
      <div className='deckViewContainer'>
          <div className='data'>{this.props.data.cards.map(this.processCards)}</div>
        <div className="btns">
          <i className="fa fa-plus" onClick={this.addCardHandler}></i>
          <button className="backBtn" onClick={this.backBtnHandler}>back</button>
        </div>    
      </div>
    );
  },

});
