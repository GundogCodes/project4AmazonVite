require('dotenv').config();
require('./config/database.cjs');
const app = require('./app-server.cjs');
const PORT = process.env.PORT || 8000;

/* Add MongoDB here after connecting database in .env
const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection;

mongoose.connect(MONGODB_URI);
db.on('open', () => {
    console.log('Mongo is Connected');
});
*/

/* Middleware */
// app.use(express.json());

/* forcing express to recognize an object as data */
// app.use((req, res, next) => {
//   res.locals.data = {};
//   next();
// })

/*******************
 MERN STACK Sripts and API code
 *******************/

// checking for token here
//app.use(require('./config/checkToken.cjs'))

//app.use('/api/users', require('./routes/api/users.cjs'))
//const ensureLoggedIn = require('./config/ensureLoggedIn.cjs')

// requiring login to check orders? need to change to checkout!!
//app.use('api/orders.cjs', ensureLoggedIn, require('./routes/api/orders.cjs'))

/* Controller Goes Here Remove the test*/
// app.get('/test', (req, res) => {
//   res.status(200).json({
//     website: 'My Website',
//     info: 'Not that much',
//   });
// });
/* Controller Ends here */
//LISTENER

// for react router
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')));
// });

app.listen(PORT, () => {
  console.log(`API Listening on port ${PORT}`);
});
