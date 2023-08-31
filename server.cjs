require('dotenv').config();
require('./config/database.cjs');
const app = require('./app-server.cjs');
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`API Listening on port ${PORT}`);
});
