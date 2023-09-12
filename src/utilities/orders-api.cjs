import sendRequest from './send-request.cjs';

const BASE_URL = '/api/orders';

// getting unpaid order for logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// adding item to cart
export function addToCart(itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

// updating item quantity in cart
export function setItemQtyInCart(itemId, quantity) {
//line18 is what is causing the error
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { item: itemId, quantity: quantity });
}

// making isPaid to true
export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'Post');}


// returning paid orders back to the user
export function getOrderHistory() {
  return sendRequest(`${BASE_URL}/history`);
}
