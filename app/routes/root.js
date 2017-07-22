module.exports = {
    childRoutes: [
        require('./app'),
        {
            path: 'login',
            getComponent(location, cb) {
                System.import("component/About").then(module => {
    		    	cb(null, module.default);
    			}) 
            },
            childRoutes: [{
                path: 'reset',
                components: require('component/About')
            }]
        }
    ]
};
