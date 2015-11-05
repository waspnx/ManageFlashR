import Backbone from 'backbone';
import React from 'react';

import deckViewComponent from './views/deckView';
import HomeView from './views/home';

let Router = Backbone.Router.extend({
  routes: {
    ''              : 'home',
    'register'      : 'register',
    'deck'          : 'userView',
    'deck/:deckID'  : 'deckView',
    'addDeck'       : 'addDeck',
    'card/:cardID'  : 'imageView',
    'addCard'       : 'addCard'
  },


  start() {
    Backbone.history.start();
  },

    initialize(appElement) {
    this.el = appElement;
    this.deck = new deckCollection();
    this.card = new cardCollection();
    this.user = new userCollection();
    let router = this;
  },

  goto(route) {
    this.navigate(route, {trigger: true});
  },

  render(component){
    ReactDom.render(component, this.el);
  },

  home() {
    this.user.fetch().then(() => {
      this.render(<HomeView
        onHomeClick={() => this.goto('')}
        onLoginClick={() => this.goto('login')}
        onLogoutClick={()=> this.goto('logout')}
        onRegisterClick={() => this.goto('register')}/>
      );
    });
  },

  deckView(deckID) {
    this.deck.fetch().then(() => {
    this.render(
      <deckViewComponent
      onPhotoSelect ={id => this.navigate(`card/${cardID}`,{trigger: true})}
      onAddCardClick={() => this.goto('addCard')}
      onBackBtnClick={() => this.goto('userView')}/>
    );
   });  
  },

addDeck(){
  this.render(
    <addDeck
    onBackBtnClick={() => this.goto('userView')}
    onSubmitClick={(title) =>{
      letnewQuestion = document.querySelector('.enterTitle').value;
      letnewDeck = new DeckCollection ({
        Title: title,
      })
      newDeck.save().then(() => {
        this.goto('addCard')})
      }
    }/>
  )
},
 

});
