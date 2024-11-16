const { Router } = require('express');

const indexRouter = Router();

const navLinks = [
  { href: "/", text: "Home" },
  { href: "new", text: "New Message" },
];

const messages = [
    {
      id: 1,
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      id: 2,
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

indexRouter.get('/', (req, res) => {
  res.render('index', { messages: messages, links: navLinks })
})

indexRouter.get('/new', (req, res) => {
  res.render('form')
})

//finds the message based on id and displays it on the template
indexRouter.get('/message/:id', (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  const message = messages.find(msg => msg.id === messageId);

  res.render('message', { message: message });
})

indexRouter.post('/new', (req, res) => {
  const message = req.body;
  const newId = messages.length > 0 ? messages[messages.length - 1].id + 1 : 1;

  messages.push({ id: newId, text: message.message, user: message.userName, added: new Date() });
  res.redirect('/');
});

module.exports = indexRouter

