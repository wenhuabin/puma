module.exports = {
    path: '/',
    //onEnter: (nextState, replace) => {
    //    if (!localStorage.username) {
    //        replace({
    //            pathname: '/login',
    //            state: {
    //                nextPathname: nextState.location.pathname
    //            }
    //        });
    //    }
    //},
    component: require('component/App'),
    indexRoute: {component: require('component/home/Home')},
    childRoutes: [{
            path: 'about',
            components: require('component/About')
        },{
            path: 'coming-soon',
            components: require('component/About')
        },
        require('./demo'),
	]
};
