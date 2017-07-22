module.exports = {
    childRoutes: [{
        path: 'login',
    	component: require('component/Login'),
        //getComponent(location, cb) {
        //    System.import("component/Login").then(module => {
    	//    	cb(null, module.default);
    	//	}) 
        //}
    },
    require('./app'),
]};
