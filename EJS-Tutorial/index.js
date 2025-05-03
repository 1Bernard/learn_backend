const express = require('express');
const path = require('path');

const app = express();

//set the view engine to ejs
app.set('view engine', 'ejs');

//set the directory for the views

app.set('views', path.join(__dirname, 'views'));

const products = [
  {
    id: 1,
    name: 'Product One',
    price: 1000
  },
  {
    id: 2,
    name: 'Product Two',
    price: 2000
  },
  {
    id: 3,
    name: 'Product Three',
    price: 3000
  }

]

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    products: products
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page'
  });
});

const PORT = 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));