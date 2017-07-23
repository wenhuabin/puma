// throws an error in the console if the page wasn't able to load
function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}
module.exports = {
    childRoutes: [{
        path: 'login',
        getComponent(location, cb) {
            System.import("component/Login").then(module => {
        		cb(null, module.default);
        	}).catch(errorLoading); 
        },
    },
    require('./app'),
]};
