const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema.cjs');

const wishListSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    items: [itemSchema],
  },
  {
    timestamps: true,
    toJson: { virtuals: true },
  }
);

wishListSchema.statics.getWishlist = function (userID) {
  return this.findOneAndUpdate(
    //find the user id
    { user: userID },
    //if the user id is not found, create a new order
    { user: userID },
    //return the new order
    { upsert: true, new: true }
  );
};

//this is the method to add an item to the wishlist
wishListSchema.methods.addItemToWishlist = async function (itemID) {
  const wishlist = this;
  //checking if item is already in cart
  const item = wishlist.items.find((item) => item._id.equals(itemID));

  if (!item) {
    //if item is not in cart, add item to cart
    const item = await mongoose.model('Item').findById(itemID);
    wishlist.items.push(item);
  }
  return wishlist.save();
};

//this method is to set the quantity of an item in the cart, it will add item if it doesn't already exist
wishListSchema.methods.setItemQty = function (itemID, newQty) {
  const cart = this;
  //checking if item is already in cart
  const lineItem = cart.lineItems.find((lineItem) =>
    lineItem.item._id.equals(itemID)
  );
  if (lineItem && newQty <= 0) {
    //if item is already in cart and new quantity is less than or equal to 0, remove item from cart
    lineItem.deleteOne();
  } else if (lineItem) {
    //if item is already in cart, set new quantity
    lineItem.quantity = newQty;
  }
  return cart.save();
};

wishListSchema.methods.removeItem = function (itemID) {
  const wishlist = this;

  const item = wishlist.items.find((item) => item._id.equals(itemID));
  item.deleteOne();

  return wishlist.save();
};

module.exports = mongoose.model('Wishlist', wishListSchema);
