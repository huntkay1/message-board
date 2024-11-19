const { Router } = require('express');
const { getMessageById } = require('../controllers/messageController');
const db = require('../db')

const indexRouter = Router();


// const date = new Date().toLocaleString('en-US')


// const messages = [
//     {
//       id: 1,
//       text: "Hi there!",
//       user: "Amando",
//       added: date
//     },
//     {
//       id: 2,
//       text: "Hello World!",
//       user: "Charles",
//       added: date
//     }
// ];

indexRouter.get('/', (req, res) => {
  res.render('index', { messages: db.messages })
})

indexRouter.get('/new', (req, res) => {
  res.render('form')
})

//finds the message based on id and displays it on the template
indexRouter.get('/message/:id', getMessageById)

indexRouter.post('/new', (req, res) => {
  const message = req.body;
  const newId = messages.length > 0 ? messages[messages.length - 1].id + 1 : 1;

  messages.push({ id: newId, text: message.message, user: message.userName, added: date });
  res.redirect('/');
});

module.exports = indexRouter

