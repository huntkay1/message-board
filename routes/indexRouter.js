const { Router } = require('express');
const { getAllMessages, addNewMessage, getMessageById } = require('../controllers/messageController');

const indexRouter = Router();


indexRouter.get('/', getAllMessages)

indexRouter.get('/new', (req, res) => {
  res.render('form')
})

indexRouter.post('/new', addNewMessage);

//finds the message based on id and displays it on the template
indexRouter.get('/message/:id', getMessageById)


module.exports = indexRouter

