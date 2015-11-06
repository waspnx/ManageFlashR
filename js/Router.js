import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import {
  UserModel,
  UserCollection,
  CardModel,
  CardCollection,
  DeckCollection,
  DeckModel
} from './resources';
import {  
  HomeView,
  RegView,
  UserView,
  NavView,
  EditCardView,
  AddCardView,
} from './views';


let Router = Backbone.Router.extend({
  
  routes: {
    ''              : 'imageView',
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
    this.deck = new DeckCollection();
    this.card = new CardCollection();
    this.user = new UserCollection();
    let router = this;
  },

  goto(route) {
    this.navigate(route, {trigger: true});
  },

  render(component){
    ReactDom.render(component, this.el);
  },


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

  deckView(id) {
    this.deck.fetch().then(() => {
      this.render(
        <deckViewComponent
        onCardSelect = {() => this.goto('card/'+ id)}
        onAddCardClick = {() => this.goto('addCard')}
        onBackBtnClick = {() => this.goto('userView')}/>
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
 
  saveEdit(quest, ans, cardId) {
    this.card.get(cardId).save({
      Question: quest,
      Answer: ans
    }).then(() => this.goto('deck/'+ deckId));
  },

  imageView(cardId) {
    let card = this.card.get(cardId);

    this.render(
      <EditCardView 
        data={card}
        onSubmitClick={ (quest, ans) => this.saveEdit(quest, ans, cardId) }
      />
    );
  },

  start() {
    Backbone.history.start();
  },

  addCard() {

    this.render(
      <AddCardView 
       // onCancelClick={this.goto('deck')}
        onSubmit={(quest, ans) => {
          let cardAddition = new CardModel({
            Question: quest,
            Answer: ans
          })
         cardAddition.save().then(()=> this.goto('deck/'));
        }}/>
    );
  },

});

export default Router;
