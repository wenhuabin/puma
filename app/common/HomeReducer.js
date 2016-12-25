import { combineReducers } from 'redux';

const profile = (state={name: 'wenhuabin', sex: 'male', age: '26'}, action)=> {
    switch(action.type) {
        case 'SET_PROFILE':
            return action.pro;
        default:
            return state;
    }
};

export default combineReducers({profile});
