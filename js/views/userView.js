import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

export default React.createClass({
  
  selectDeckHandler(id) {
    this.props.onDeckSelect(id);
  },

  processData(data) {
    return (
      <div id={data.deck.id} 
        onClick={() => this.selectDeckHandler(data.deck.id)} className='list deckThumb'>{data.deck.title}
      </div>
    );
  },

  render(){
    return(
      <div className='deckwrapper'>
        <div className='deckThumbList'>{this.props.decks.map(this.processData)} 
        </div>
        <button onClick={()=>this.addDeckHandler()} className='addDeck'>Add a Deck</button>
      </div>
    );
  }
});