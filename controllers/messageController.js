const asyncHandler = require("express-async-handler");
const db = require('../db/queries');


const getMessageById = asyncHandler(async (req, res) => {
    const messageId = parseInt(req.params.id, 10);
  
    const message = await db.getMessageById(Number(messageId));
  
    if (!message) {
        res.status(404).send("Message not found");
    }

    console.log(message)
  
    res.render('message', { message: message });
});

async function getAllMessages(req, res ) {
    const messages = await db.getMessages();
    res.render('index', { messages: messages})
}

async function addNewMessage(req, res) {
    const message = req.body;
    await db.addMessage(message);
    console.log(message)
    res.redirect('/');
}


module.exports = { getAllMessages, addNewMessage, getMessageById }