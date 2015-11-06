import Backbone from 'backbone';
import UserModel from './user-model.js';
import {APP_URL} from '../data.js';


export default Backbone.Collection.extend({

  url: APP_URL,
  model: UserModel,

});