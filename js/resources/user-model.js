import Backbone from 'backbone';
import {APP_URL} from '../data.js';

let userModel = Backbone.Model.extend({

  urlRoot: APP_URL,
  idAttribute: 'user_id',
  templateData() {
    let data = this.toJSON();
    return data;
  },
});

export default userModel;