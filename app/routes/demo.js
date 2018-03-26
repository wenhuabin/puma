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
            path: 'portal',
            getComponent(location, cb) {
                System.import("component/demo/Portal").then(module => {
            		cb(null, module.default);
            	}) 
            },
        },{
            path: 'experiment',
            getComponent(location, cb) {
                System.import("component/demo/Experiment").then(module => {
            		cb(null, module.default);
            	}) 
            },
        },{
            path: 'error',
            getComponent(location, cb) {
                System.import("component/error/ErrorComponent").then(module => {
            		cb(null, module.default);
            	}) 
            },
        },
    ]
};
