const express = require('express');
const router = express.Router();
const wishListCtrl = require('../controllers/wishList.cjs');

// GET /api/wish-list/
router.get('/', wishListCtrl.wishList);

// POST /api/wish-list/:id
router.post('/:id', wishListCtrl.addToWishList);

module.exports = router;
