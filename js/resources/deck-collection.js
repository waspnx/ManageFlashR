import Backbone from 'backbone';
import {APP_URL} from '../data';
import DeckModel from './deck-model';

export default Backbone.Collection.extend({

  url: APP_URL+'decks',

  model: DeckModel,
  
});
