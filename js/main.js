import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Router from './router';

console.log('Hello, World');

let element = document.querySelector('.app');

new Router(element).start();
