import Backbone from 'backbone';
import {APP_URL} from '../data';

export default Backbone.Model.extend({

  urlRoot: APP_URL, 

  idAttribute: 'id'

});
