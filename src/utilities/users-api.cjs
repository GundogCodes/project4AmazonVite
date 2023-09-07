import sendRequest from './send-request.cjs'

const BASE_URL = '/api/users'

export function signUp(userData) {
    console.log(userData)
    return sendRequest(`${BASE_URL}/new`, 'POST', userData)
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}