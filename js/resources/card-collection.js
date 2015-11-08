import Backbone from 'backbone';
import {APP_URL} from '../data';
import CardModel from './card-model';

export default Backbone.Collection.extend({

  url: APP_URL+'/signup',

  model: CardModel,
  
});

