import { combineReducers } from 'redux';
import home from 'component/home/HomeReducer';

export const rootReducer = combineReducers({
    home,
});
export default rootReducer;
