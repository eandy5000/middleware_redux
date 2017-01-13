import { FETCH_USERS } from './types'

export function getUsers() {
    return {
        type: FETCH_USERS,
        payload: [
            {name: 'Joe'},
            {name: 'Bob'},
            {name: 'Jim'}
        ]
    }
}