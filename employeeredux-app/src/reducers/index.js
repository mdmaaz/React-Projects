import { combineReducers } from 'redux'

const userReducer = (state=[], action)=>{
    if(action.type === 'FETCH_USERS'){
        state = acation.payload.data;
        return state;
    } else if (action.type === 'DELETE_USER'){
        state =[...state].filter(user => user.id !== action.payload)
        return state;
    }
    return state;
}

export default combineReducers({ users: userReducer});