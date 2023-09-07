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
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, quantity });
}

// making isPaid to true
export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'PUT');
}

// returning paid orders back to the user
export function getOrderHistory() {
  return sendRequest(`${BASE_URL}/history`);
}
