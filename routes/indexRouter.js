const { Router } = require('express');
const { getAllMessages } = require('../controllers/messageController');
// const db = require('../db')

const indexRouter = Router();


indexRouter.get('/', getAllMessages)

// indexRouter.get('/new', (req, res) => {
//   res.render('form')
// })

// //finds the message based on id and displays it on the template
// indexRouter.get('/message/:id', getMessageById)

// indexRouter.post('/new', addNewMessage);

module.exports = indexRouter

