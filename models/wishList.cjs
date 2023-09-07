const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema.cjs');

const lineItemSchema = new Schema(
  {
    qauntity: { type: Number, default: 1 },
    item: itemSchema,
  },
  {
    timestamps: true,
    toJson: { virtuals: true },
  }
);

const wishListSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJson: { virtuals: true },
  }
);

/*******************
 ACTUAL WISHLIST MODEL
 *******************/

wishListSchema.statics.getCart = function (userID) {
  return this.findOneAndUpdate(
    //find the user id
    { user: userID, isPaid: false },
    //if the user id is not found, create a new order
    { user: userID },
    //return the new order
    { upsert: true, new: true }
  );
};

//this is the method to add an item to the cart
wishListSchema.methods.addItemToCart = async function (itemID) {
  const cart = this;
  //checking if item is already in cart
  const lineItem = cart.lineItems.find((lineItem) =>
    lineItem.item._id.equals(itemID)
  );
  //if item is already in cart, increase quantity by 1
  if (lineItem) {
    lineItem.quantity += 1;
  } else {
    //if item is not in cart, add item to cart
    const item = await mongoose.model('Item').findById(itemID);
    cart.lineItems.push({ item });
  }
  return cart.save();
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

module.exports = mongoose.model('Order', wishListSchema);
