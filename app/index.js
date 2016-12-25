import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import rootRoute from 'routes/root';
import createStore from 'redux/configStore';

let store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute} />
    </Provider>,
    document.getElementById('app')
);
