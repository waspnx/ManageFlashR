import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import Cookies from 'js-cookie';

import {
  UserCollection,
  UserModel,
  CardCollection,
  CardModel,
  DeckCollection,
  DeckModel
} from './resources';

import {
  AddDeckView,
  RegisterPage,
  UserView,
  DeckView,
  NavView,
  EditCardView,
  AddCardView,
  LoginPage,
} from './views';

let Router = Backbone.Router.extend({
  
  routes: {
    ''              : 'home',
    'loginPage'     : 'loginPage',
    'login'         : 'login',
    'isLogged'      : 'isLogged',
    'registerPage'  : 'registerPage',
    'register'      : 'register',
    'decks'         : 'dash',
    'decks/:deckID' : 'deckView',
    'addDeck'       : 'addDeck',
    'card/:cardID'  : 'cardView',
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
    this.navigate(route, {
      trigger: true,
      replace: true
    });
  },

  render(component){
    ReactDom.render(component, this.el);
  },

  loginPage() {
    ReactDom.render(
      <LoginPage
        user={Cookies.getJSON('user')}
        onLoginClick={(user,pass)=>this.login(user,pass)}
        // onLogoutClick={() => this.navigate('logout', {trigger: true})}
        onRegisterClick={() => this.navigate('registerPage', {trigger: true})}/>,
        document.querySelector('.app')
    );
  },

  login(user,pass) {
    let request = $.ajax({
      url: `https://rocky-garden-9800.herokuapp.com/login`,
      method: 'POST',
      data: {
        username: user,
        password: pass,
      }
    });
    $('.app').html('loading...');
    request.then((data) => {
      Cookies.set('user', data);
      $.ajaxSetup({
        headers: {
          'Access-Token': data.user.auth_token,
        }
      });
      this.goto('decks');
    }).fail(() => {
      $('.app').html('Try again');
      this.goto('loginPage');
    });
  },

  ReqAuth() {
    Cookies.get('user').then(()=>{
      let cookie = JSON.parse(Cookies.get('user'));
      $.ajaxSetup({
        headers: {
         'Access-Token': cookie.user.auth_token
        }
      });
    });
  },

  isLogged() {
    if (Cookies.get('user')) {
      let cookie = JSON.parse(Cookies.get('user'));
      $.ajaxSetup({
        headers: {
         'Access-Token': cookie.user.auth_token
        }
      })
      this.goto('decks');
    } else {
      this.goto('loginPage');
    }
  },

  registerPage() {
    ReactDom.render(
      <RegisterPage 
        user={Cookies.getJSON('user')}
        onRegisterClick={() => this.navigate('register', {trigger: true})}/>,
      document.querySelector('.app')
    );
  },

  register(user,name,email,pass) {
    console.log($('#use').val())

    let request = $.ajax({
      url: `https://rocky-garden-9800.herokuapp.com/signup`,
      method: 'POST',
      data: {
        username: $('#username').val(),
        fullname: $('#fullname').val(),
        email: $('#email').val(),
        password: $('#password').val(),
      }
    });
    $('.app').html('loading...');
    request.then((data) => {
      Cookies.set('user', data);
      $.ajaxSetup({
        headers: {
          auth_token: data.access_token
        }
      });
      this.goto('decks');
    }).fail(() => {
      $('.app').html('Submit again');
      this.goto('registerPage');
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

    this.goto('isLogged');

  },

  dash() {
    this.deck.fetch().then((data) => {
      this.render(
        <UserView
        data={data}
        onDeckClick={(id)=> this.goto('decks/'+id)}
        onAddDeckClick={()=> this.goto('addDeck')}/>
      );
    });
  },

  addDeck() {
    let cookie = JSON.parse(Cookies.get('user'));
    $.ajaxSetup({
      headers: {
       'Access-Token': cookie.user.auth_token
      }
    });

    this.render(
      <AddDeckView
        onBackBtnClick={() => this.goto('decks')}
        onSubmitClick={(title) =>{
          let newDeck = new DeckModel ({
            title: title,
          })
          newDeck.save().then(() => {this.goto('decks')})
        }
      }/>
    );
  },

  deckView(id) {
    
    let baseUrl = 'https://rocky-garden-9800.herokuapp.com/decks/';
    let thisId = `${id}`;
    let endofurl = '/cards';
    // console.log(`${baseUrl}${id}/cards`);

    let request = $.ajax({
      url: `${baseUrl}${id}/cards`,
      method:'GET',
    });

    request.then((data) => {
      this.render(
        <DeckView
        data={data}
        onCardSelect = {() => this.goto('card/:id')}
        onAddCardClick = {() => this.goto('addCard')}
        onBackBtnClick = {() => this.goto('decks')}/>
      );
    });  
  },
 
  saveEdit(quest, ans, deckId, cardId) {
    this.card.get(cardId).save({
      Question: quest,
      Answer: ans
    }).then(() => this.goto('deck/'+ deckId));
  },

  cardView(cardId) {
    let card = this.card.get(cardId);

    this.render(
      <EditCardView 
        data={card}
        onSubmitClick={ (quest, ans) => this.saveEdit(quest, ans, cardId) }
      />
    );
  },

  addCard(deckId) {

    this.render(
      <AddCardView 
        onCancelClick={()=> this.goto('deck/'+ deckId)}
        onSubmit={(quest, ans) => {
          let cardAddition = new CardModel({
            question: quest,
            answer: ans
          })
          cardAddition.save().then(()=> this.goto('decks/:deckID'));
        }}/>
     );
   },

});
export default Router;
