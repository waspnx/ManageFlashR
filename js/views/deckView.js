import React from 'react';
import Backbone from 'backbone';
import _ from 'underscore';

// this view shows rows of flashR cards
// that comprise the deck that was clicked in UserView

export default React.createClass({

  addCardHandler(){
    this.props.onAddCardClick();
  },

  onDeleteHandler(){
    if (window.confirm('Are you sure you want to DELETE this deck? Cards in the deck will be lost.')) {
      this.props.onDeleteClick();
    };
  },

  backBtnHandler(route){
    this.props.onBackBtnClick(route);
  },

  processCards(card) {
    let onCardSelect= this.props.onCardSelect;
    return (
      <div className='cardContainer' key={card.id} 
        onClick ={()=> onCardSelect(card.id)}>
        <div className='quest'>Question: {card.question}</div>
        <div className='ans'>Answer: {card.answer}</div>
      </div>
     )
  },


  render() {
    return(
      <div className='deckViewContainer'>
          <div className='data'>{this.props.data.cards.map(this.processCards)}</div>
        <div className="btns">
          <button className='addBtn' onClick={this.addCardHandler}><i className="fa fa-plus"></i></button>
          <button className='delete deleteDeck' onClick={this.onDeleteHandler}>Delete Deck</button>
          <button className="backBtn" onClick={this.backBtnHandler}>&#60; Back &#60;</button>
        </div>    
      </div>
    );
  },

});
