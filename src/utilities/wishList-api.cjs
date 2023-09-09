import sendRequest from './send-request.cjs';

const BASE_URL = '/api/wish-list';

// Creates wishlist for logged in user
export function getWishList() {
  return sendRequest(`${BASE_URL}`);
}

// Adds an item or items to users wishlist
export function addToWishList(itemId) {
  return sendRequest(`${BASE_URL}/${itemId}`, 'POST');
}

// Removes/Deletes item from wishlist
export function removeItem(itemId) {
  return sendRequest(`${BASE_URL}/${itemId}`, 'DELETE');
}
