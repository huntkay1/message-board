const pool = require('./pool')

const date = new Date().toLocaleString('en-US');



async function addNewMessage(message) {
    await pool.query(`INSERT INTO messages (text, username, added) VALUES ('${message.message}, ${message.userName}, ${date});`)
}

async function getMessages() {
    const { rows } = await pool.query ('SELECT * FROM messages')
    return rows
}


module.exports = { addNewMessage, getMessages }