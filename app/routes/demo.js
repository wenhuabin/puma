module.exports = {
    path: 'demo',

    getComponent(location, cb) {
        System.import("component/About").then(module => {
    		cb(null, module.default);
    	}) 
    },
    childRoutes: [{
            path: 'cjs',
            components: require('component/ComingSoon')
        },{
            path: 'd3',
            components: require('component/ComingSoon')
        },{
            path: 'echart',
            components: require('component/ComingSoon')
        },{
            path: 'canvas',
            components: require('component/ComingSoon')
        },{
            path: 'svg',
            components: require('component/ComingSoon')
        },{
            path: 'component',
            components: require('component/ComingSoon')
        },
    ]
};
