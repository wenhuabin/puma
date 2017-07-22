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
    //indexRoute: {component: require('component/About')},
    childRoutes: [{
            path: 'about',
            components: require('component/About')
        },
        require('./demo'),{
            path: '*', //处理不存在的路由
            components: require('component/ComingSoon')
        },
	]
};
