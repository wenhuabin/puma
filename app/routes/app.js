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
            getComponent(location, cb) {
                System.import("component/About").then(module => {
            		cb(null, module.default);
            	}) 
            },
        },
        require('./demo'),
        {
            path: '*', //处理不存在的路由
            getComponent(location, cb) {
                System.import("component/ComingSoon").then(module => {
            		cb(null, module.default);
            	}) 
            },
        }
	]
};
