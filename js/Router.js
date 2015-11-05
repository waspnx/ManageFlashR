<<<<<<< HEAD
import Backbone from 'backbone';
import React from 'react';

import deckViewComponent from './views/deckView';
import HomeView from './views/home';
=======
import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import {HomeView,RegView,UserView} from './views'

>>>>>>> 158a0fe19a0327fbfd45af14834ec4bb3f7dd382

let Router = Backbone.Router.extend({
  
  routes: {
    ''              : 'home',
    'register'      : 'register',
<<<<<<< HEAD
    'deck'          : 'userView',
    'deck/:deckID'  : 'deckView',
    'addDeck'       : 'addDeck',
    'card/:cardID'  : 'imageView',
    'addCard'       : 'addCard'
  },


  start() {
    Backbone.history.start();
=======
    // 'deck'          : 'userView',
    // 'deck/:deckID'  : 'deckView',
    // 'addDeck'       : 'addDeck',
    // 'card/:cardID'  : 'imageView',
    // 'addCard'       : 'addCard'
>>>>>>> 158a0fe19a0327fbfd45af14834ec4bb3f7dd382
  },

  initialize(appElement) {
    this.el = appElement;
    // this.deck = new deckCollection();
    // this.card = new cardCollection();
    this.user = new userCollection();
    let router = this;
  },

  goto(route) {
    this.navigate(route, {trigger: true});
  },

  render(component){
    ReactDom.render(component, this.el);
  },

<<<<<<< HEAD
=======
  loginRequest(){
    let request = $.ajax({
      url: 'https://rocky-garden-9800.herokuapp.com',
      method: 'POST',
      data: {
        user: {
          username: $('.username').val(),
          password: $('.password').val()
        }
      }
    });
  },

  // logout() {
    
  // },

  registerRequest() {
    let request = $.ajax({
      url: 'peaceful-water-4820.herokuapp.com',
      method: 'POST',
      data: {
        user: {
          username: $('.username').val(),
          password: $('.password').val(),
          full_name: $('.fullName').val(),
          email: $('.email').val()
        }
      }
    });
  },

>>>>>>> 158a0fe19a0327fbfd45af14834ec4bb3f7dd382
  home() {
    this.user.fetch().then(() => {
      this.render(<HomeView
        onHomeClick={() => this.goto('')}
        onLoginClick={() => this.goto('login')}
        onLogoutClick={()=> this.goto('logout')}
        onRegisterClick={() => this.goto('register')}/>
<<<<<<< HEAD
      );
    });
  },

  deckView(deckID) {
    this.render(
      <deckViewComponent
      onAddCardClick={() => this.goto('addCard')}/>
    );
  },

    addDeck() {  
    this.render(
      <addDeck
        onBackBtnClick={() => this.goto('userView')}
        onSubmitClick={(title) => {
          let newDeck = new DeckCollection ({
            Title: title,
          });

          newDeck.save().then(() => {
            this.goto('userView');
          });
        }}/>
    );
  }

});
=======
        )
    });
  },

  imageView() {
    
  },

  start() {
    Backbone.history.start();
  },

});

export default Router;
>>>>>>> 158a0fe19a0327fbfd45af14834ec4bb3f7dd382
