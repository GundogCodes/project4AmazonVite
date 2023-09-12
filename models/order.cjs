// you all know what this is
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema.cjs');

/****************** 
specific item schem and associated functionality to add the prices 
******************/

//this is the schema for the order form per specific item
const lineItemSchema = new Schema(
  {
    quantity: { type: Number, default: 1 },
    item: itemSchema,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

//this multiplies the quantity by the price of the item
lineItemSchema.virtual('extPrice').get(function () {
  return this.quantity * this.item.price;
});

/******************
 order schema and associated method calls for the functionality of the order form
 *****************/

//this is the schema for the order form
const orderSchema = new Schema(
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

// .reduce method turns the array number of items prices of the same type into a single number and total
orderSchema.virtual('orderTotal').get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

// this .reduce method returns the total number of specific items in the order as a single number
orderSchema.virtual('totalQty').get(function () {
  return this.lineItems.reduce((total, item) => total + item.quantity, 0);
});

// .slice to take the id of the item and return the last 6 characters of the id
orderSchema.virtual('orderId').get(function () {
  return this.id.slice(-6).toUpperCase();
});

// .toLocaleDateString to return the date of the order
orderSchema.virtual('orderDate').get(function () {
  return new Date(this.createdAt).toLocaleDateString();
});

/*******************
 ACTUAL ORDER MODEL
 *******************/

orderSchema.statics.getCart = function (userID) {
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
orderSchema.methods.addItemToCart = async function (itemID) {
  const cart = this;

  console.log('cart.lineItems: ', cart.lineItems);

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
orderSchema.methods.setItemQty = function (itemID, newQty) {
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

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
