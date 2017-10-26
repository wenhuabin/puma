module.exports = {
    path: 'demo',
    childRoutes: [
        {
            path: 'cjs',
            getComponent(location, cb) {
                System.import("component/ComingSoon").then(module => {
            		cb(null, module.default);
            	}) 
            },
        },{
            path: 'd3',
            getComponent(location, cb) {
                System.import("component/ComingSoon").then(module => {
            		cb(null, module.default);
            	}) 
            },
        },{
            path: 'echart',
            getComponent(location, cb) {
                System.import("component/ComingSoon").then(module => {
            		cb(null, module.default);
            	}) 
            },
        },{
            path: 'canvas',
            getComponent(location, cb) {
                System.import("component/ComingSoon").then(module => {
            		cb(null, module.default);
            	}) 
            },
        },{
            path: 'svg',
            getComponent(location, cb) {
                System.import("component/ComingSoon").then(module => {
            		cb(null, module.default);
            	}) 
            },
        },{
            path: 'component',
            getComponent(location, cb) {
                System.import("component/ComingSoon").then(module => {
            		cb(null, module.default);
            	}) 
            },
        },{
            path: 'error-border',
            getComponent(location, cb) {
                System.import("component/ComingSoon").then(module => {
            		cb(null, module.default);
            	}) 
            },
        },
    ]
};
