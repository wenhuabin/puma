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
    getComponent(location, cb) {
        System.import("component/App").then(module => {
    		cb(null, module.default);
    	}) 
    },
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
