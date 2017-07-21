const routes = {
    path: '/',
    component: require('component/App'),
    indexRoute: {component: require('common/Home')},
    childRoutes: [{
    		path: 'about',
    		getComponent(location, cb) {
                System.import("common/About").then(module => {
    		    	cb(null, module.default);
    			}).catch(err => {
        			console.log("Chunk loading failed");
    			}); 
    		}
		},{
    		path: 'coming-soon',
    		getComponent(location, cb) {
                System.import("common/ComingSoon").then(module => {
    		    	cb(null, module.default);
    			}).catch(err => {
        			console.log("Chunk loading failed");
    			}); 
    		}
		},
    ],
};

module.exports = routes; 
