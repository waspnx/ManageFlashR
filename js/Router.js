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
    'deck'          : 'userView',
    'deck/:deckID'  : 'deckView',
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
      this.goto('deck');
    }).fail(() => {
      $('.app').html('Try again');
      this.goto('loginPage');
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
      this.goto('deck');
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
      this.goto('deck');
    }).fail(() => {
      $('.app').html('Submit again');
      this.goto('registerPage');
    });
  },

  home() {

    this.goto('isLogged');

  },



  deck() {
    this.deck.fetch().then(()=> {
      this.render(
        <UserView
        onDeckSelect={(id)=> this.goto('deck/'+id)}/>
      );
    });
  },

  deckView(id) {
    this.card.fetch().then(() => {
      this.render(
        <deckViewComponent
        onCardSelect = {() => this.goto('card/:id')}
        onAddCardClick = {() => this.goto('addCard')}
        onBackBtnClick = {() => this.goto('deck')}/>
      );
   });  
  },

  addDeck(){
    this.render(
      <addDeck
      onBackBtnClick={() => this.goto('deck')}
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

  addCard() {
    this.render(
      <AddCardView 
        onCancelClick={this.goto('deck/:deckID')}
        onAddCard={(quest, ans) => {
          let cardAddition = new CardModel({
            Question: quest,
            Answer: ans
          })
          cardAddition.save().then(()=> this.goto('deck/:deckID'));
        }}/>
    );
  },

});

export default Router;
