import Backbone from 'backbone';
import {APP_URL} from '../data';
import CardModel from './card_model';

export default Backbone.Collection.extend({

  url: APP_URL,

  model: CardModel,
  
});

