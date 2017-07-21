const routes = {
    path: '/',
    component: require('component/App'),
    indexRoute: {component: require('component/home/Home')},
    childRoutes: [{
    		path: 'about',
    		getComponent(location, cb) {
                System.import("component/About").then(module => {
    		    	cb(null, module.default);
    			}).catch(err => {
        			console.log("Chunk loading failed");
    			}); 
    		}
		},{
    		path: 'coming-soon',
    		getComponent(location, cb) {
                System.import("component/ComingSoon").then(module => {
    		    	cb(null, module.default);
    			}).catch(err => {
        			console.log("Chunk loading failed");
    			}); 
    		}
		},
    ],
};

module.exports = routes; 
