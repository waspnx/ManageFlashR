import React from 'react';
import Backbone from 'backbone';
import _ from 'underscore';

export default React.createClass({
  
  selectDeckHandler(id) {
    this.props.onDeckClick(id);
  },

  addDeckHandler() {
    this.props.onAddDeckClick();
  },

  processData(deck) {
    // console.log(this.props.data.decks.id);
    return (
      <div key={deck.id} id={deck.id} 
        onClick={() => this.selectDeckHandler(deck.id)} 
        className='list deckThumb'><h2>{deck.title}</h2>
      </div>
    );
  },

  render(){
    // console.log(this)
    return(
      <div className='deckwrapper'>
        <div className='deckThumbList'>{this.props.data.decks.map(this.processData)}
        </div>
        <button onClick={this.addDeckHandler} className='addDeck'>Add a Deck</button>
      </div>
    );
  }
});