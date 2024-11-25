const { Client } = require('pg');
require('dotenv').config(); //loads enviornemt variables from .env

const date = new Date().toLocaleString('en-US')

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR ( 255 ),
    username VARCHAR ( 20 ),
    added VARCHAR ( 25 )
);

INSERT INTO messages (text, username, added)
VALUES 
    ('Hi there!', 'Bryan', '${date}'),
    ('Hello world!', 'Odin', '${date}');
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();