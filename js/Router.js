import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import {HomeView,RegView,UserView} from './views'


let Router = Backbone.Router.extend({
  
  routes: {
    ''              : 'home',
    'register'      : 'register',
    // 'deck'          : 'userView',
    // 'deck/:deckID'  : 'deckView',
    // 'addDeck'       : 'addDeck',
    // 'card/:cardID'  : 'imageView',
    // 'addCard'       : 'addCard'
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
