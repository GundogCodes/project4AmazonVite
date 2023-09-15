const express = require('express');
const checkToken = require('./config/checkToken.cjs');

//created a express app
const app = express();

//import path to use and manipulate the file paths on our system
const path = require('path');

//import log http requests with morgan
const logger = require('morgan');

//using json packages to communicate with server/clients
app.use(express.json());
app.use(express.static('dist'));

//app will use a local object in its responses which can contain info from the requests
app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

app.use(checkToken);

//use logger to log http requests
app.use(logger('dev'));

//check if there is a user in the requests
const ensureLoggedIn = require('./config/ensureLoggedIn.cjs');

//defining routes(endpoints) of app(api) where req/res can be done
//and information can be exchanged and check if they need to be logged in
app.use('/api/users', require('./routes/user.cjs'));

app.use('/api/items', require('./routes/item.cjs'));
app.use('/api/orders', require('./routes/order.cjs'));
app.use('/api/wish-list/', require('./routes/wishList.cjs'));

// catch all for wrong routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

module.exports = app;
