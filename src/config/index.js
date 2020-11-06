const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

module.exports = {
  OMDB_API_KEY: process.env.VUE_APP_OMDB_API_KEY,
  OMDB_API_URL: process.env.VUE_APP_OMDB_API_URL,
};
