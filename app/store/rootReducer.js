import { combineReducers } from 'redux';
import home from 'component/home/HomeReducer';
import token from 'store/common/BaseReducer';

export const rootReducer = combineReducers({
    home,
    token,
});
export default rootReducer;
