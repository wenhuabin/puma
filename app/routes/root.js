const routes = {
    path: '/',
    component: require('common/App'),
    indexRoute: {component: require('common/Home')},
    childRoutes: [{
    		path: 'about',
    		getComponent(location, cb) {
    		    require.ensure([], require => {
    		        cb(null, require('common/About'));
    		    });
    		}
		},{
    		path: 'coming-soon',
    		getComponent(location, cb) {
    		    require.ensure([], require => {
    		        cb(null, require('common/ComingSoon'));
    		    });
    		}

		},
    ],
};

module.exports = routes; 
