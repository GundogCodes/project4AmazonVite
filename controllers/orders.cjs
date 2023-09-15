const Order = require('../models/order.cjs');
const User = require('../models/user.cjs');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  history,
};

async function cart(req, res) {
  try {
   
    const cart = await Order.getCart(req.user._id);
    res.status(200).json(cart);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function addToCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    cart.user = await User.findById(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.status(200).json(cart);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.message });
  }
}

//Update the cart's isPaid property to true
async function checkout(req, res) {
  try {
  
    const cart = await Order.findOne({ user: req.user._id, isPaid: false });
 
    cart.isPaid = true;
    await cart.save();
    const updatedCart = await Order.getCart(req.user._id);
   
    res.status(200).json(updatedCart);
  } catch (e) {
  
    res.status(400).json({ msg: e.message });
  }
}
async function setItemQtyInCart(req, res) {
  try{
   
    const cart = await Order.getCart(req.user._id);console.log("🚀 ~ file: orders.cjs:79 ~ setItemQtyInCart ~ req.body.newQty):", req.body.newQty)
    // this line below is what is causing the error 
    await cart.setItemQty(req.body.item, req.body.quantity);
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}
// Return the logged in user's paid order history
async function history(req, res) {
  // Sort most recent orders first
  try {
    const orders = await Order.find({ user: req.user._id, isPaid: true })
      .sort('-updatedAt')
      .exec()
    res.status(200).json(orders);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
