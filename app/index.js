import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory} from 'react-router';
import Hello from 'common/component';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Hello}/>
    </Router>),
    document.getElementById('app')
);
