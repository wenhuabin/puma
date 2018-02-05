import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import rootRoute from 'routes/root';
import createStore from 'store/configStore';

let store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute} />
    </Provider>,
    document.getElementById('app')
);

let isDev = window.location.host.includes('127.0.0.1') || window.location.host.includes('localhost') || window.location.host.includes('t.t')

if ('serviceWorker' in navigator && !isDev) {
    navigator.serviceWorker
  	           .register('./puma-sw.js')
  	           .then(function() { console.log('Service Worker Registered'); });
  	}
