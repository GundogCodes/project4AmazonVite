import sendRequest from './send-request.cjs'

const BASE_URL = './controllers/items.cjs'

// getting all items
export function getAll() {
    return sendRequest(BASE_URL)
}

// getting specific item by id
export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

//function to get random items in promo banners
/*
export function getRandom(){
    return sendRequest(`${BASE_URL/${id}}`)
}
*/