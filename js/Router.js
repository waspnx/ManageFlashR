
let Router = Backbone.Router.extend({
  routes: {
    ''              : 'home',
    'register'      : 'registerView', 
    'deck'          : 'userView',
    'deck/:deckID'  : 'deckView',
    'addDeck'       : 'addDeck',
    'card/:cardID'  : 'imageView',
    'addCard'       : 'addCard'
  },

});