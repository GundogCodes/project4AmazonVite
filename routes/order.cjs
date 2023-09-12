const express = require('express');
const router = express.Router();
const ordersCtrl = require('../controllers/orders.cjs');
const {checkToken} = require('../controllers/users.cjs')
//const checkToken = require('../config/checkToken.cjs')
const ensureLoggedIn = require('../config/ensureLoggedIn.cjs')

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);

// POST /api/orders/createCart
//router.post('/',usersCtrl.authenticateToken, ordersCtrl.createCart)
//router.post('/', ordersCtrl.createCart); 

// GET /api/orders/history
router.get('/history', ordersCtrl.history);

// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);

// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);

// PUT /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);

module.exports = router;


