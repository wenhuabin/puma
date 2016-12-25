import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from  'middlewares/thunkMiddleware';
import rootReducer from './rootReducer';
//var rootReducer = require('./rootReducer');

export default initialState => {

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware)
    );

    if(module.hot){
        module.hot.accept('./rootReducer', ()=>{
            var nextRootReducer = require('./rootReducer').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;

};
        //compose(
        //    applyMiddleware(thunkMiddleware),
        //    window.devToolsExtension ? window.devToolsExtension() : f=>f
        //)
