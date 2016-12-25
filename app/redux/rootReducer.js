import { combineReducers } from 'redux';
import home from 'common/HomeReducer';

export const rootReducer = combineReducers({
    home,
});
export default rootReducer;
