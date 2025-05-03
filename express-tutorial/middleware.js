const express = require('express');

const app = express();

//define middleware
const myFirstMiddleware = (req, res, next) => {
  console.log('this first middleware will run on every request');
  next();
}

app.use(myFirstMiddleware);

app.get('/', (req, res) => res.send('Welcome to our home page'));

app.get('/about', (req, res) => res.send('Welcome to our about page'));

app.listen(3000, () => console.log('Server running on port 3000'));