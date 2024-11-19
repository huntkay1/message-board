const { Router } = require('express');
const { getMessageById, addNewMessage } = require('../controllers/messageController');
const db = require('../db')

const indexRouter = Router();


indexRouter.get('/', (req, res) => {
  res.render('index', { messages: db.messages })
})

indexRouter.get('/new', (req, res) => {
  res.render('form')
})

//finds the message based on id and displays it on the template
indexRouter.get('/message/:id', getMessageById)

indexRouter.post('/new', addNewMessage);

module.exports = indexRouter

