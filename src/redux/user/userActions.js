import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from './userTypes'
import axios from 'axios'

const fetchUserRequest = () => (
    {
        type: FETCH_USER_REQUEST
    }
)

const fetchUserSuccess = (users) => (
    {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
)

const fetchUserFailure = (error) => (
    {
        type: FETCH_USER_FAILURE,
        payload: error
    }
)

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch((error) => {
                dispatch(fetchUserFailure(error.message))
            })
    }
}
