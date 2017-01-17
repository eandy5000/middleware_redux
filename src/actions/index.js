import { FETCH_USERS } from './types'

export function getUsers() {
    const users = [{message: 'test'}]

    return {
        type: FETCH_USERS,
        payload: users
    }
}