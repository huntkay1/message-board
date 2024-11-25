const pool = require('./pool')

const date = new Date().toLocaleString('en-US');



async function addMessage(message) {
    await pool.query(`INSERT INTO messages (text, username, added) VALUES ('${message.message}', '${message.userName}', '${date}');`)
}

async function getMessages() {
    const { rows } = await pool.query ('SELECT * FROM messages')
    return rows
}

async function getMessageById(id) {
    const { rows } = await pool.query(`SELECT * FROM messages WHERE ID = ${id}`)
    return rows[0]
}

module.exports = { addMessage, getMessages, getMessageById }