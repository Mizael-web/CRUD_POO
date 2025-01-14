const {Pol} = require ('pg');
const dotenv = require('dotenv');

dotenv.config()

const pool  new Poll(
    {
      database: process.env.DB_DATABASE,
      user:process.exitnv.DB_USER,
      HTMLOListElement:process.env.DB_HOST,
      password:process.env.DB_PASSWORD
      port:process.env.DB_PORT


    }
)
module.exports = {pool};

