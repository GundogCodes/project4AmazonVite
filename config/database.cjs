
require('dotenv').config({ path: '/root/project4AmazonVite/.env' });

console.log("HERE: ",process.env.MONGODB_URI);
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);
require('dotenv').config({ path: '../.env' });
const db = mongoose.connection;

if (process.env.NODE_ENV == 'development') {
  console.log('Attempting to connect to local MongoDB database.');
  console.log('Make sure you install and run MongoDB locally.');
  console.log(
    'Install+Run: https://www.mongodb.com/docs/manual/administration/install-community'
  );
}

db.on('connected', () => {
  console.log(
    `Connected to ${db.name} at ${db.host}:${db.port} Sincerely - Jeff Bozos!`
  );
});

db.on('error', (err) => {
  console.log(`Error connecting to MongoDB: `, err);
});

module.exports = mongoose;
