import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from  'middlewares/thunkMiddleware';
import rootReducer from './rootReducer';

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
