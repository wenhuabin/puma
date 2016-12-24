import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import rootRoute from 'routes/root';

ReactDOM.render(
    <Router history={browserHistory} routes={rootRoute} />,
    document.getElementById('app')
);
