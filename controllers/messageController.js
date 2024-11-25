const asyncHandler = require("express-async-handler");
const db = require('../db/queries');


// const getMessageById = asyncHandler(async (req, res) => {
//     const messageId = parseInt(req.params.id, 10);
  
//     const message = await db.getMessageById(Number(messageId));
  
//     if (!message) {
//         res.status(404).send("Message not found");
//     }
  
//     res.render('message', { message: message });
// });

async function getAllMessages(req, res ) {
    const messages = await db.getMessages();
    res.render('index', { messages: messages})
}


module.exports = { getAllMessages }