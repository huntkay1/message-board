const { Pool } = require('pg');
require('dotenv').config();

module.exports = new Pool({
    host: 'localhost',
    user: 'Kayla.',
    database: 'message_board',
    password: process.env.PASSWORD,
    port: 5432
})