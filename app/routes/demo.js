module.exports = {
    path: 'demo',

    getComponent(location, cb) {
        System.import("component/About").then(module => {
    		cb(null, module.default);
    	}) 
    },
    childRoutes: [{
            path: 'cjs',
            components: require('component/About')
        },{
            path: 'd3',
            components: require('component/About')
        },{
            path: 'echart',
            components: require('component/About')
        },{
            path: 'canvas',
            components: require('component/About')
        },{
            path: 'svg',
            components: require('component/About')
        },{
            path: 'component',
            components: require('component/About')
        },
    ]
};
