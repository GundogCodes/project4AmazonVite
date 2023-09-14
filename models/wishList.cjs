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

wishListSchema.statics.getWishList = function (userID) {
  return this.findOneAndUpdate(
    //find the user id
    { user: userID },
    //if the user id is not found, create a new order
    { user: userID },
    { upsert: true, new: true }
  );
};

//this is the method to add an item to the wishlist
wishListSchema.methods.addItem = async function (itemID) {
  const wishList = this;
  //checking if item is already in cart
  const item = wishList.items.find((item) => item._id.equals(itemID));

  if (!item) {

    const item = await mongoose.model('Item').findById(itemID);
    wishList.items.push(item);
  }
  return wishList.save();
};

//this method is to set the quantity of an item in the cart, it will add item if it doesn't already exist
wishListSchema.methods.setItemQty = function (itemID, newQty) {
  const cart = this;
  //checking if item is already in whishlist
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
  const wishList = this;

  const item = wishList.items.find((item) => item._id.equals(itemID));
  item.deleteOne();

  return wishList.save();
};

const WishList = mongoose.model('WishList', wishListSchema);
module.exports = WishList;
