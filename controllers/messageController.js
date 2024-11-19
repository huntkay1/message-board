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

module.exports = { getMessageById }