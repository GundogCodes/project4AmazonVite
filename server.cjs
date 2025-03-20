require('dotenv').config({ path: './.env' }); 
require('./config/database.cjs');
const app = require('./app-server.cjs');
const PORT = process.env.PORT || 8000;
const mongoose = require("mongoose");


const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection;

mongoose.connect(MONGODB_URI);
db.on('open', () => {
    console.log('Mongo is Connected');
});


/* Middleware */

/* forcing express to recognize an object as data */
 app.use((req, res, next) => {
   res.locals.data = {};
   next();
 })

/*******************
 MERN STACK Sripts and API code
 *******************/

// checking for token here
app.use(require('./config/checkToken.cjs'))

app.use('/api/users', require('./routes/user.cjs'));
const ensureLoggedIn = require('./config/ensureLoggedIn.cjs')
app.use('/api/items', require('./routes/item.cjs'));
// requiring login to check orders? need to change to checkout!!
app.use('api/orders.cjs', ensureLoggedIn, require('./routes/order.cjs'));

/* Controller Goes Here Remove the test*/
app.get('/test', (req, res) => {
res.status(200).json({
     website: 'My Website',
     info: 'Not that much',
   });
 });
/* Controller Ends here */
//LISTENER

// for react router
app.get('*', (req, res) => {
   res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')));
});

app.listen(PORT, () => {
  console.log(`API Listening on port ${PORT}`);
});
