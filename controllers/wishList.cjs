const WishList = require('../models/wishList.cjs');
const User = require('../models/user.cjs');

module.exports = {
  // Create wishlist
  wishList,
  // Add item to wishlist
  addToWishList,
  // Delete item from wishlist
  removeItemFromWishList,
};

// Creating a wishlist
async function wishList(req, res) {
  try {
    const wishList = await WishList.getWishList(req.user._id);
    res.status(200).json(wishList);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

//Add an item to the wishlist
async function addToWishList(req, res) {
  try {
    const wishList = await WishList.getWishList(req.user._id);
    wishList.user = await User.findById(req.user._id);
    await wishList.addItem(req.params.id);
    res.status(200).json(wishList);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

//Delete item from wishlist
async function removeItemFromWishList(req, res) {
  try {
    const wishList = await WishList.getWishList(req.user._id);
    wishList.user = await User.findById(req.user._id);
    await wishList.removeItem(req.params.id);
    res.status(200).json(wishList);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
