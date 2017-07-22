import { combineReducers } from 'redux';

const token = (state={uname: '', email: ''}, action)=> {
    switch(action.type) {
        case 'SET_TOKEN':
            return action.token;
        default:
            return state;
    }
};

export default combineReducers({token});
