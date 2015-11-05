import Backbone from 'backbone';
import {APP_URL} from '../data.js';

let userModel = Backbone.Model.extend({

  urlRoot: APP_URL,
  idAttribute: 'user_id',
  
});

export default userModel;