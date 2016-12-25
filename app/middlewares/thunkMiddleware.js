export default ({dispatch, getState}) => next => action => typeof action === 'function' ? action(dispatch) : next(action);

//export default function thunkMiddleware({dispatch, getState}){
//
//    return next => action === 'function' ? action(dispatch) : next(action);
//}
