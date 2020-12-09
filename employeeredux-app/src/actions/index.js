import axios from 'axios';

export const addUsers = (user)=> {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export const deleteUser = (user)=> {
    return {
        type: 'DELETE_USER',
        payload: id
    }
}

export const fetchUsers =() => async dispatch =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: 'FETCH_USERS', payload: response})
};