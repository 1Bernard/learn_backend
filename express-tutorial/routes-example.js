const express = require('express');

const app = express();

//root route
app.get('/', (req, res) => res.send('Welcome to our home page'));

app.get('/products', (req, res) => {
  const products = [
    {
      id: 1,
      label: 'Product One',
      price: '$1.99'
    },
    {
      id: 2,
      label: 'Product Two',
      price: '$2.99'
    },
    {
      id: 3,
      label: 'Product Three',
      price: '$3.99'
    }
  ]
  res.json(products)
})

//get a single product
app.get('/product/:id', (req, res) => {
  const ProductId = parseInt(req.params.id);
  const products = [
    {
      id: 1,
      label: 'Product One',
      price: '$1.99'
    },
    {
      id: 2,
      label: 'Product Two',
      price: '$2.99'
    },
    {
      id: 3,
      label: 'Product Three',
      price: '$3.99'
    }
  ]

  const getSingleProduct = products.find(product => product.id === ProductId)
  
  if (getSingleProduct) {
    res.json(getSingleProduct)
  } else {
    res.status(404).send('Product not found')
  }
})

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));