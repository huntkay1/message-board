const db = require('../db');
const asyncHandler = require("express-async-handler");


const getMessageById = asyncHandler(async (req, res) => {
    const messageId = parseInt(req.params.id, 10);
  
    const message = await db.getMessageById(Number(messageId));
  
    if (!message) {
        res.status(404).send("Message not found");
    }
  
    res.render('message', { message: message });
});

const addNewMessage = (req, res) => {
    const message = req.body;

    db.addNewMessage(message)
    
    res.redirect('/');
}

module.exports = { getMessageById, addNewMessage }