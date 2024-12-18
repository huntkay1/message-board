const express = require("express");
const app = express();
const path = require('node:path');
const assetsPath = path.join(__dirname, "public"); 
const indexRouter = require('./routes/indexRouter');
const { body, validationResult } = require("express-validator");



app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//parses the form data into req.body for the New router
app.use(express.urlencoded({ extended: true }));


app.use('/', indexRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});