import React from 'react';
import ReactDom from 'react-dom';


import Router from './Router';

let appElement = document.querySelector('.app');

new Router(appElement).start();